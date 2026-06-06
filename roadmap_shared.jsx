const { useState, useEffect, useMemo } = React;

// Helper to parse standard markdown links: [Link Text](URL)
window.parseMarkdownLinks = function(text) {
  if (!text) return '';
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#3B82F6',
          textDecoration: 'none',
          borderBottom: '1px dashed #3B82F6',
          fontWeight: '600',
          transition: 'all 0.2s ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#60A5FA';
          e.target.style.borderBottomColor = '#60A5FA';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#3B82F6';
          e.target.style.borderBottomColor = '#3B82F6';
        }}
      >
        {match[1]} ↗
      </a>
    );
    lastIndex = regex.lastIndex;
  }
  
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
};

// Reusable Roadmap Renderer Component
window.RoadmapRenderer = function({ user, config }) {
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);
  const [view, setView] = useState("list"); // 'list' or 'topics'
  const [checked, setChecked] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTagFilter, setActiveTagFilter] = useState("All");

  const progressKey = `${config.id}-progress-${user || 'guest'}`;

  // Load saved checked items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(progressKey);
    if (saved) {
      try {
        setChecked(JSON.parse(saved));
      } catch (e) {
        setChecked({});
      }
    } else {
      setChecked({});
    }
  }, [progressKey]);

  // Toggle checklist checkbox state and save to localStorage
  const toggleChecked = (id) => {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    localStorage.setItem(progressKey, JSON.stringify(next));
  };

  // Determine data type ('topics' vs 'days')
  const isTopicsType = useMemo(() => {
    if (!config.weeks || config.weeks.length === 0) return true;
    return !!config.weeks[0].topics;
  }, [config.weeks]);

  // Compute total tasks and completed tasks count
  const stats = useMemo(() => {
    let total = 0;
    let completed = 0;
    let totalHours = 0;
    let completedHours = 0;

    config.weeks.forEach((week) => {
      if (isTopicsType) {
        week.topics.forEach((t, i) => {
          total++;
          const id = `${config.id}-${week.week}-${i}`;
          const isDone = !!checked[id];
          if (isDone) completed++;
          
          const hrs = parseFloat(t.hrs) || 0;
          totalHours += hrs;
          if (isDone) completedHours += hrs;
        });
      } else {
        week.days.forEach((d, dayIndex) => {
          const hrs = parseFloat(d.hrs) || 0;
          totalHours += hrs;
          
          d.tasks.forEach((task, taskIndex) => {
            total++;
            const id = `${config.id}-${week.week}-${dayIndex}-${taskIndex}`;
            const isDone = !!checked[id];
            if (isDone) {
              completed++;
              // distribute day hours equally among its tasks
              completedHours += hrs / d.tasks.length;
            }
          });
        });
      }
    });

    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, percent, totalHours, completedHours: Math.round(completedHours * 10) / 10 };
  }, [config.weeks, checked, isTopicsType, config.id]);

  // Define default phase colors if not provided
  const phaseColors = config.phaseColors || {
    "Foundations": "#3B82F6",
    "Case Studies": "#8B5CF6",
    "LLD Focus": "#10B981",
    "Integration": "#F59E0B",
    "Interview Practice": "#EF4444",
    "Setup & Resume": "#3B82F6",
    "Project 1": "#10B981",
    "Project 2": "#8B5CF6",
    "Interview Prep": "#EF4444",
    "Job Hunt": "#F59E0B",
    "Buffer": "#10B981",
    "Contingency": "#6366F1"
  };

  const getWeekColor = (week) => {
    return phaseColors[week.phase] || config.accentColor || "#3B82F6";
  };

  const currentWeek = config.weeks[activeWeekIndex] || config.weeks[0];
  const activeWeekColor = currentWeek ? getWeekColor(currentWeek) : (config.accentColor || "#3B82F6");

  // Collect all unique tags for filtering (e.g. HLD, LLD, Core, Advanced)
  const allTags = useMemo(() => {
    const tags = new Set(["All"]);
    config.weeks.forEach(w => {
      if (w.topics) {
        w.topics.forEach(t => {
          if (t.hld) tags.add("HLD");
          if (t.lld) tags.add("LLD");
          if (t.tags) t.tags.forEach(tag => tags.add(tag));
        });
      }
    });
    return Array.from(tags);
  }, [config.weeks]);

  // Perform search over the entire roadmap
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();
    const results = [];

    config.weeks.forEach((week) => {
      if (isTopicsType) {
        week.topics.forEach((t, i) => {
          const matchTopic = t.topic.toLowerCase().includes(query);
          const matchResources = t.resources && t.resources.some(r => r.toLowerCase().includes(query));
          if (matchTopic || matchResources) {
            results.push({
              week: week.week,
              weekTitle: week.title,
              phase: week.phase,
              color: getWeekColor(week),
              topic: t.topic,
              resources: t.resources || [],
              hld: t.hld,
              lld: t.lld,
              id: `${config.id}-${week.week}-${i}`
            });
          }
        });
      } else {
        week.days.forEach((d, dayIndex) => {
          d.tasks.forEach((task, taskIndex) => {
            if (task.toLowerCase().includes(query)) {
              results.push({
                week: week.week,
                weekTitle: week.title,
                phase: week.phase,
                color: getWeekColor(week),
                day: d.day,
                task: task,
                id: `${config.id}-${week.week}-${dayIndex}-${taskIndex}`
              });
            }
          });
        });
      }
    });

    return results;
  }, [config.weeks, searchQuery, isTopicsType, config.id]);

  return (
    <div style={{ background: "#050508", minHeight: "100vh", color: "#E8E8F0", padding: "10px 0" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        
        {/* Course Banner Card */}
        <div style={{
          background: "linear-gradient(135deg, #11131F 0%, #0C0D14 100%)",
          border: "1px solid #1E2235",
          borderRadius: 24,
          padding: "28px 24px",
          marginBottom: 24,
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            top: -50,
            right: -50,
            width: 150,
            height: 150,
            background: config.accentColor,
            opacity: 0.15,
            filter: "blur(60px)",
            borderRadius: "50%"
          }}></div>

          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
            <div style={{ flex: "1 1 500px" }}>
              <div style={{
                fontSize: 10,
                letterSpacing: 3,
                color: config.accentColor,
                fontWeight: 800,
                textTransform: "uppercase",
                marginBottom: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 6
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: config.accentColor }}></span>
                {config.tagline}
              </div>
              <h1 style={{ fontSize: 28, fontWeight: 900, margin: "0 0 8px 0", color: "#FFFFFF", lineHeight: 1.2 }}>
                {config.title}
              </h1>
              <p style={{ fontSize: 13, color: "#9CA3AF", margin: "0 0 16px 0", lineHeight: 1.6 }}>
                {config.description}
              </p>
              
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div style={{ background: "#161824", border: "1px solid #24293E", borderRadius: 12, padding: "8px 14px", fontSize: 12 }}>
                  <span style={{ color: "#6B7280" }}>Progress: </span>
                  <strong style={{ color: "#FFF" }}>{stats.completed} / {stats.total} Tasks</strong>
                </div>
                <div style={{ background: "#161824", border: "1px solid #24293E", borderRadius: 12, padding: "8px 14px", fontSize: 12 }}>
                  <span style={{ color: "#6B7280" }}>Hours Studied: </span>
                  <strong style={{ color: "#FFF" }}>{stats.completedHours}h / {stats.totalHours}h</strong>
                </div>
              </div>
            </div>

            {/* Circular Progress Gauge */}
            <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", width: 100, height: 100 }}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="transparent" stroke="#1E2235" strokeWidth="6" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="transparent"
                    stroke={config.accentColor}
                    strokeWidth="6"
                    strokeDasharray={`${2 * Math.PI * 42}`}
                    strokeDashoffset={`${2 * Math.PI * 42 * (1 - stats.percent / 100)}`}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.6s ease" }}
                  />
                </svg>
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, width: "100%", height: "100%",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
                }}>
                  <span style={{ fontSize: 22, fontWeight: 900, color: "#FFF" }}>{stats.percent}%</span>
                  <span style={{ fontSize: 9, color: "#6B7280", fontWeight: 700 }}>COMPLETE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Toolbar: Search & Tags */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 20,
          background: "#10121C",
          border: "1px solid #1E2235",
          padding: "12px 16px",
          borderRadius: 16
        }}>
          {/* Search Box */}
          <div style={{ position: "relative", flex: "1 1 300px" }}>
            <input
              type="text"
              placeholder="Search topics, tags, or links..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "#08090E",
                border: "1px solid #22273D",
                color: "#E8E8F0",
                fontSize: 13,
                padding: "10px 14px 10px 36px",
                borderRadius: 10,
                outline: "none",
                transition: "border-color 0.2s"
              }}
              onFocus={(e) => e.target.style.borderColor = config.accentColor}
              onBlur={(e) => e.target.style.borderColor = "#22273D"}
            />
            {/* Search Icon */}
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#6B7280", fontSize: 14 }}>🔍</span>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#6B7280", cursor: "pointer", fontSize: 13 }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Tag Filter Controls (Only for topics view system design) */}
          {allTags.length > 1 && !searchQuery && (
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTagFilter(tag)}
                  style={{
                    background: activeTagFilter === tag ? config.accentColor : "#161824",
                    border: activeTagFilter === tag ? "none" : "1px solid #24293E",
                    color: activeTagFilter === tag ? "#FFF" : "#9CA3AF",
                    padding: "6px 12px",
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Content Rendering: Search Results vs Core Course View */}
        {searchResults !== null ? (
          /* Search Results View */
          <div style={{ background: "#10121C", border: "1px solid #1E2235", borderRadius: 20, padding: 20, marginBottom: 24 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 16px 0", color: "#FFF", display: "flex", alignItems: "center", gap: 8 }}>
              <span>🔍</span> Search Results for "{searchQuery}" ({searchResults.length} matches)
            </h2>
            {searchResults.length === 0 ? (
              <div style={{ textAlign: "center", color: "#6B7280", padding: "30px 0" }}>No topics found matching your query.</div>
            ) : (
              <div style={{ display: "grid", gap: 12 }}>
                {searchResults.map((res, index) => (
                  <div key={index} style={{
                    background: "#161824",
                    border: `1px solid #24293E`,
                    borderLeft: `4px solid ${res.color}`,
                    borderRadius: 12,
                    padding: 14
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: res.color }}>
                        WEEK {res.week} · {res.phase.toUpperCase()} {res.day ? `· ${res.day}` : ''}
                      </span>
                      <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#9CA3AF", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={checked[res.id] || false}
                          onChange={() => toggleChecked(res.id)}
                          style={{ width: 14, height: 14 }}
                        />
                        Done
                      </label>
                    </div>

                    <div style={{ fontSize: 13, fontWeight: 700, color: "#FFF", marginBottom: 6 }}>
                      {res.topic ? window.parseMarkdownLinks(res.topic) : window.parseMarkdownLinks(res.task)}
                    </div>

                    {res.resources && res.resources.length > 0 && (
                      <div style={{ fontSize: 11, color: "#9CA3AF" }}>
                        {res.resources.map((r, ri) => (
                          <div key={ri} style={{ marginTop: 4 }}>• {window.parseMarkdownLinks(r)}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Normal Roadmap Navigation & Details */
          <div>
            {/* Week Selector Ribbon */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 10, letterSpacing: 2, color: "#6B7280", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
                Select Week
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${Math.min(config.weeks.length, 13)}, 1fr)`,
                gap: 4,
                overflowX: "auto",
                paddingBottom: 4
              }}>
                {config.weeks.map((w, i) => {
                  const wColor = getWeekColor(w);
                  const isSelected = activeWeekIndex === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveWeekIndex(i)}
                      style={{
                        background: isSelected ? wColor : "#10121C",
                        border: isSelected ? `2px solid ${wColor}` : "1px solid #1E2235",
                        borderRadius: 8,
                        padding: "10px 4px",
                        cursor: "pointer",
                        color: isSelected ? "#FFF" : "#6B7280",
                        fontSize: 10,
                        fontWeight: 700,
                        textAlign: "center",
                        lineHeight: 1.3,
                        transition: "all 0.2s"
                      }}
                    >
                      W{w.week}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* View Style Toggle (Only if it's topics type system design) */}
            {isTopicsType && (
              <div style={{ display: "flex", gap: 3, marginBottom: 16, background: "#10121C", borderRadius: 10, padding: 3, border: "1px solid #1E2235" }}>
                {[["list", "📋 Grid View"], ["topics", "🎯 Expanded List"]].map(([v, label]) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    style={{
                      flex: 1,
                      background: view === v ? activeWeekColor : "transparent",
                      border: "none",
                      borderRadius: 8,
                      padding: "8px",
                      color: view === v ? "#FFF" : "#6B7280",
                      fontWeight: 600,
                      fontSize: 11,
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}

            {/* Current Active Week Banner */}
            <div style={{
              background: "#10121C",
              border: `1px solid ${activeWeekColor}33`,
              borderLeft: `4px solid ${activeWeekColor}`,
              borderRadius: 16,
              padding: "16px 20px",
              marginBottom: 16
            }}>
              <div style={{ fontSize: 10, letterSpacing: 2, color: activeWeekColor, fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
                {currentWeek.phase}
              </div>
              <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 4, color: "#FFF" }}>
                Week {currentWeek.week}: {currentWeek.title}
              </div>
              <div style={{ fontSize: 12, color: "#9CA3AF" }}>
                Estimated Effort: ~{isTopicsType 
                  ? currentWeek.topics.reduce((a, t) => a + (parseFloat(t.hrs) || 1), 0).toFixed(1)
                  : currentWeek.hrs} hrs
              </div>
            </div>

            {/* Week Content Display */}
            {isTopicsType ? (
              /* Topic-based rendering (System Design style) */
              view === "list" ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 12, marginBottom: 20 }}>
                  {currentWeek.topics
                    .filter(t => activeTagFilter === "All" || t.hld && activeTagFilter === "HLD" || t.lld && activeTagFilter === "LLD" || t.tags && t.tags.includes(activeTagFilter))
                    .map((t, i) => {
                      const id = `${config.id}-${currentWeek.week}-${i}`;
                      return (
                        <div key={i} style={{ background: "#10121C", border: "1px solid #1E2235", borderRadius: 14, padding: 14 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: "start" }}>
                            <div>
                              <div style={{ fontWeight: 800, color: activeWeekColor, fontSize: 12 }}>{t.day}</div>
                              <div style={{ fontSize: 11, color: "#6B7280", marginTop: 2 }}>{t.hrs} hr</div>
                            </div>
                            <div style={{ display: "flex", gap: 6, alignItems: 'center' }}>
                              <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#9CA3AF', cursor: 'pointer' }}>
                                <input
                                  type="checkbox"
                                  checked={checked[id] || false}
                                  onChange={() => toggleChecked(id)}
                                  style={{ width: 14, height: 14 }}
                                />
                                Done
                              </label>
                              <div style={{ display: "flex", gap: 4 }}>
                                {t.hld && <span style={{ fontSize: 9, background: "#3B82F622", color: "#60A5FA", padding: "3px 6px", borderRadius: 4, fontWeight: 700 }}>HLD</span>}
                                {t.lld && <span style={{ fontSize: 9, background: "#10B98122", color: "#34D399", padding: "3px 6px", borderRadius: 4, fontWeight: 700 }}>LLD</span>}
                              </div>
                            </div>
                          </div>
                          <div style={{ fontSize: 13, color: "#E5E7EB", fontWeight: 700, lineHeight: 1.5, marginBottom: 10 }}>
                            {window.parseMarkdownLinks(t.topic)}
                          </div>
                          {t.resources && t.resources.length > 0 && (
                            <div style={{ fontSize: 11, color: "#9CA3AF" }}>
                              {t.resources.map((r, j) => (
                                <div key={j} style={{ marginBottom: 4, display: "flex", alignItems: "flex-start", gap: 4 }}>
                                  <span>•</span>
                                  <span>{window.parseMarkdownLinks(r)}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              ) : (
                /* Expanded List View */
                <div style={{ background: "#10121C", border: "1px solid #1E2235", borderRadius: 16, padding: 20, marginBottom: 20 }}>
                  {currentWeek.topics
                    .filter(t => activeTagFilter === "All" || t.hld && activeTagFilter === "HLD" || t.lld && activeTagFilter === "LLD" || t.tags && t.tags.includes(activeTagFilter))
                    .map((t, i) => {
                      const id = `${config.id}-${currentWeek.week}-${i}`;
                      return (
                        <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < currentWeek.topics.length - 1 ? "1px solid #1E2235" : "none" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: 'center' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: '#F3F4F6', cursor: 'pointer' }}>
                              <input
                                type="checkbox"
                                checked={checked[id] || false}
                                onChange={() => toggleChecked(id)}
                                style={{ width: 14, height: 14 }}
                              />
                              {i + 1}. {window.parseMarkdownLinks(t.topic)}
                            </label>
                            <div style={{ display: "flex", gap: 4 }}>
                              {t.hld && <span style={{ fontSize: 9, background: "#3B82F622", color: "#60A5FA", padding: "2px 6px", borderRadius: 4, fontWeight: 700 }}>HLD</span>}
                              {t.lld && <span style={{ fontSize: 9, background: "#10B98122", color: "#34D399", padding: "2px 6px", borderRadius: 4, fontWeight: 700 }}>LLD</span>}
                            </div>
                          </div>
                          {t.resources && t.resources.length > 0 && (
                            <div style={{ fontSize: 11, color: "#9CA3AF", paddingLeft: 22 }}>
                              {t.resources.map((r, j) => (
                                <div key={j} style={{ marginTop: 4 }}>• {window.parseMarkdownLinks(r)}</div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              )
            ) : (
              /* Day/Task-based rendering (ML, Python, SQL style) */
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 12, marginBottom: 20 }}>
                {currentWeek.days.map((d, i) => (
                  <div key={i} style={{ background: "#10121C", border: "1px solid #1E2235", borderRadius: 14, padding: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, borderBottom: "1px solid #1E2235", paddingBottom: 8 }}>
                      <span style={{ fontWeight: 800, color: activeWeekColor, fontSize: 13 }}>{d.day}</span>
                      <span style={{ fontSize: 11, color: "#6B7280" }}>{d.hrs} hrs total</span>
                    </div>
                    {d.tasks.map((task, j) => {
                      const id = `${config.id}-${currentWeek.week}-${i}-${j}`;
                      return (
                        <div key={j} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 8,
                          marginBottom: 8,
                          lineHeight: 1.4,
                          color: '#D1D5DB',
                          fontSize: 12.5
                        }}>
                          <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, cursor: 'pointer' }}>
                            <input
                              type="checkbox"
                              checked={checked[id] || false}
                              onChange={() => toggleChecked(id)}
                              style={{ width: 14, height: 14, marginTop: 2, flexShrink: 0 }}
                            />
                            <span>{window.parseMarkdownLinks(task)}</span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Phase Timeline & Structural Summary */}
            {config.phases && (
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 10, letterSpacing: 2, color: "#6B7280", fontWeight: 700, marginBottom: 10, textTransform: "uppercase" }}>
                  Roadmap Structure
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 8 }}>
                  {config.phases.map((p, i) => {
                    const pColor = phaseColors[p.phase] || config.accentColor || "#3B82F6";
                    return (
                      <div key={i} style={{
                        background: "#10121C",
                        border: `1px solid ${pColor}33`,
                        borderLeft: `4px solid ${pColor}`,
                        borderRadius: 10,
                        padding: 12
                      }}>
                        <div style={{ fontWeight: 800, color: pColor, fontSize: 11, marginBottom: 4 }}>
                          {p.phase} · W{p.weeks}
                        </div>
                        <div style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.4 }}>
                          {p.desc}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Core Insights / Custom Notes */}
            {config.insights && config.insights.map((ins, index) => (
              <div key={index} style={{
                background: "#10121C",
                border: "1px solid #1E2235",
                borderLeft: `4px solid ${ins.color || activeWeekColor}`,
                borderRadius: 12,
                padding: 14,
                marginBottom: 12
              }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: ins.color || activeWeekColor, marginBottom: 6, textTransform: "uppercase" }}>
                  {ins.title}
                </div>
                <div style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.7 }}>
                  {window.parseMarkdownLinks(ins.text)}
                </div>
              </div>
            ))}
            
          </div>
        )}

      </div>
    </div>
  );
};
