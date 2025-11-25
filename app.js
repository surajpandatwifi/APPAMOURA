// EditFlow App JavaScript
const app = document.getElementById('app');

// Navigation system
function navigate(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId)?.classList.add('active');
    updateNav(screenId);
}

function updateNav(screenId) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.screen === screenId) {
            item.classList.add('active');
        }
    });
}

// Initialize app
function init() {
    renderApp();
    navigate('onboarding-1');
}

function renderApp() {
    app.innerHTML = `
        ${renderOnboarding()}
        ${renderAuth()}
        ${renderHome()}
        ${renderBottomNav()}
    `;
    attachEventListeners();
}

function renderOnboarding() {
    return `
        <div id="onboarding-1" class="screen active">
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 32px; text-align: center;">
                <h1 style="font-size: 48px; font-weight: 800; margin-bottom: 16px; background: linear-gradient(135deg, #a855f7, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">EditFlow</h1>
                <p style="font-size: 18px; color: var(--text-secondary); margin-bottom: 48px;">Edit smarter, not harder</p>
                <p style="font-size: 16px; line-height: 1.6; margin-bottom: 48px; max-width: 300px;">Professional video editing delivered to your workflow. Upload, configure, and download stunning edits.</p>
                <button class="btn-pill btn-primary" onclick="navigate('onboarding-2')" style="width: 100%; margin-bottom: 16px;">Get Started</button>
                <button class="btn-pill btn-secondary" onclick="navigate('login')">Log In</button>
                <div style="margin-top: 32px; display: flex; gap: 8px;">
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-purple);"></div>
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--glass-bg);"></div>
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--glass-bg);"></div>
                </div>
            </div>
        </div>
        <div id="onboarding-2" class="screen">
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 32px;">
                <div style="width: 200px; height: 200px; background: var(--glass-bg); border-radius: 24px; margin-bottom: 32px; display: flex; align-items: center; justify-content: center; font-size: 64px;">📤</div>
                <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 16px;">Upload Your Footage</h2>
                <p style="font-size: 16px; color: var(--text-secondary); text-align: center; margin-bottom: 48px; max-width: 300px;">We handle the rest. Get professional edits delivered on time, every time.</p>
                <button class="btn-pill btn-primary" onclick="navigate('onboarding-3')" style="width: 100%;">Continue</button>
                <div style="margin-top: 32px; display: flex; gap: 8px;">
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--glass-bg);"></div>
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-purple);"></div>
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--glass-bg);"></div>
                </div>
            </div>
        </div>
        <div id="onboarding-3" class="screen">
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 32px;">
                <div style="width: 200px; height: 200px; background: var(--glass-bg); border-radius: 24px; margin-bottom: 32px; display: flex; align-items: center; justify-content: center; font-size: 64px;">💎</div>
                <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 16px;">Transparent Pricing</h2>
                <p style="font-size: 16px; color: var(--text-secondary); text-align: center; margin-bottom: 48px; max-width: 300px;">Clear deadlines and fair pricing. No hidden fees, just quality edits.</p>
                <button class="btn-pill btn-primary" onclick="navigate('login')" style="width: 100%; margin-bottom: 16px;">Get Started</button>
                <button class="btn-pill btn-secondary" onclick="navigate('home')">Skip</button>
                <div style="margin-top: 32px; display: flex; gap: 8px;">
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--glass-bg);"></div>
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--glass-bg);"></div>
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-purple);"></div>
                </div>
            </div>
        </div>
    `;
}

function renderAuth() {
    return `
        <div id="login" class="screen">
            <div style="padding: 48px 24px; min-height: 100vh; display: flex; align-items: center;">
                <div class="card" style="width: 100%;">
                    <h2 style="font-size: 32px; font-weight: 700; margin-bottom: 8px;">Welcome back</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 32px;">Sign in to continue</p>
                    <input type="email" placeholder="Email" style="width: 100%; padding: 14px; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 12px; color: white; margin-bottom: 16px; font-size: 16px; font-family: inherit;">
                    <input type="password" placeholder="Password" style="width: 100%; padding: 14px; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 12px; color: white; margin-bottom: 24px; font-size: 16px; font-family: inherit;">
                    <button class="btn-pill btn-primary" onclick="navigate('home')" style="width: 100%; margin-bottom: 16px;">Sign In</button>
                    <div style="text-align: center; color: var(--text-secondary); margin: 24px 0;">or continue with</div>
                    <button class="btn-pill btn-secondary" style="width: 100%; margin-bottom: 12px;">🔵 Google</button>
                    <button class="btn-pill btn-secondary" style="width: 100%;">🍎 Apple</button>
                </div>
            </div>
        </div>
    `;
}

function renderHome() {
    return `
        <div id="home" class="screen">
            <div style="padding: 48px 20px 20px;">
                <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 24px; font-weight: 500;">Hi, Creator 👋</p>
                
                <!-- Search Bar - Frosted Glass Pill -->
                <div class="glass-bar" style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
                    <span style="font-size: 20px;">🔍</span>
                    <input type="text" placeholder="Search projects, services, or help" style="flex: 1; background: none; border: none; color: var(--text-primary); font-size: 15px; font-family: inherit; outline: none;">
                    <span style="font-size: 20px; cursor: pointer;">⚙️</span>
                </div>
                
                <!-- Category Pills - Scrollable -->
                <div style="overflow-x: auto; display: flex; gap: 12px; margin-bottom: 32px;">
                    <div class="category-pill active">Home</div>
                    <div class="category-pill">Services</div>
                    <div class="category-pill">Projects</div>
                    <div class="category-pill">Analytics</div>
                </div>
                
                <!-- Hero Card - Large Banner -->
                <div class="hero-card" style="margin-bottom: 32px; cursor: pointer; height: 220px; display: flex; align-items: flex-end; background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3));">
                    <div class="hero-card-gradient" style="padding: 24px;">
                        <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Start a New Project</h2>
                        <p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 14px;">Upload footage and get professional edits</p>
                        <button class="btn-pill btn-primary" onclick="navigate('builder-1')" style="padding: 12px 28px; font-size: 15px;">Create Project</button>
                    </div>
                </div>
                
                <!-- Section Divider -->
                <div style="display: flex; align-items: center; gap: 16px; margin: 32px 0 20px;">
                    <div style="flex: 1; height: 1px; background: var(--glass-border-soft);"></div>
                    <h3 style="font-size: 16px; font-weight: 600; color: var(--text-secondary); letter-spacing: 0.1em;">RECOMMENDED PACKAGES</h3>
                    <div style="flex: 1; height: 1px; background: var(--glass-border-soft);"></div>
                </div>
                
                <!-- Story/Poster Cards - Horizontal Scroll -->
                <div style="display: flex; gap: 16px; overflow-x: auto; margin-bottom: 32px;">
                    <div style="min-width: 180px; cursor: pointer;" onclick="navigate('builder-1')">
                        <div style="width: 180px; height: 240px; background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2)); border-radius: var(--radius-lg); margin-bottom: 12px; display: flex; align-items: center; justify-content: center; font-size: 64px; box-shadow: var(--shadow-float); border: 1px solid var(--glass-border-soft); position: relative; overflow: hidden;">
                            🎬
                            <div style="position: absolute; top: 12px; right: 12px; width: 32px; height: 32px; background: var(--glass-medium); backdrop-filter: blur(20px); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; border: 1px solid var(--glass-border);">🔖</div>
                        </div>
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">Reels Editing</h4>
                        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">Instagram & TikTok</p>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 18px; font-weight: 700;" class="gradient-text">$49</span>
                            <span style="font-size: 12px; color: var(--text-muted);">24-48h</span>
                        </div>
                    </div>
                    
                    <div style="min-width: 180px; cursor: pointer;" onclick="navigate('builder-1')">
                        <div style="width: 180px; height: 240px; background: linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(59, 130, 246, 0.2)); border-radius: var(--radius-lg); margin-bottom: 12px; display: flex; align-items: center; justify-content: center; font-size: 64px; box-shadow: var(--shadow-float); border: 1px solid var(--glass-border-soft); position: relative; overflow: hidden;">
                            🎥
                            <div style="position: absolute; top: 12px; right: 12px; width: 32px; height: 32px; background: var(--glass-medium); backdrop-filter: blur(20px); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; border: 1px solid var(--glass-border);">🔖</div>
                        </div>
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">YouTube Editing</h4>
                        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">Long-form content</p>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 18px; font-weight: 700;" class="gradient-text">$149</span>
                            <span style="font-size: 12px; color: var(--text-muted);">3-5 days</span>
                        </div>
                    </div>
                    
                    <div style="min-width: 180px; cursor: pointer;" onclick="navigate('builder-1')">
                        <div style="width: 180px; height: 240px; background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(239, 68, 68, 0.2)); border-radius: var(--radius-lg); margin-bottom: 12px; display: flex; align-items: center; justify-content: center; font-size: 64px; box-shadow: var(--shadow-float); border: 1px solid var(--glass-border-soft); position: relative; overflow: hidden;">
                            ✂️
                            <div style="position: absolute; top: 12px; right: 12px; width: 32px; height: 32px; background: var(--glass-medium); backdrop-filter: blur(20px); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; border: 1px solid var(--glass-border);">🔖</div>
                        </div>
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">Pro Package</h4>
                        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">Premium editing</p>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 18px; font-weight: 700;" class="gradient-text">$299</span>
                            <span style="font-size: 12px; color: var(--text-muted);">5-7 days</span>
                        </div>
                    </div>
                </div>
                
                <!-- Filter Chips -->
                <div style="overflow-x: auto; display: flex; gap: 10px; margin-bottom: 24px;">
                    <div class="filter-chip active">All</div>
                    <div class="filter-chip">Quick Edits</div>
                    <div class="filter-chip">Premium</div>
                    <div class="filter-chip">Under $100</div>
                    <div class="filter-chip">Fast Delivery</div>
                </div>
                
                <!-- Section Title -->
                <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 20px;">Explore More</h3>
                
                <!-- Grid Cards -->
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
                    <div class="grid-card" onclick="navigate('services')">
                        <div style="font-size: 48px; margin-bottom: 12px;">📱</div>
                        <div style="font-size: 13px; font-weight: 600;">Social<br>Media</div>
                    </div>
                    <div class="grid-card" onclick="navigate('services')">
                        <div style="font-size: 48px; margin-bottom: 12px;">🎁</div>
                        <div style="font-size: 13px; font-weight: 600;">Gift<br>Cards</div>
                    </div>
                    <div class="grid-card" onclick="navigate('services')">
                        <div style="font-size: 48px; margin-bottom: 12px;">🎟️</div>
                        <div style="font-size: 13px; font-weight: 600;">Special<br>Offers</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="services" class="screen">
            <div style="padding: 48px 20px 20px;">
                <h1 style="font-size: 32px; font-weight: 700; margin-bottom: 24px;">Services</h1>
                <div class="glass-bar" style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                    <span>🔍</span>
                    <input type="text" placeholder="Search services" style="flex: 1; background: none; border: none; color: white; font-family: inherit; outline: none;">
                </div>
                <div style="display: flex; gap: 12px; margin-bottom: 32px; overflow-x: auto;">
                    <div class="category-pill active">All</div>
                    <div class="category-pill">Short Form</div>
                    <div class="category-pill">Long Form</div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div class="card" onclick="navigate('builder-1')" style="display: flex; align-items: center; gap: 16px; cursor: pointer;">
                        <div style="width: 80px; height: 80px; background: linear-gradient(135deg, var(--accent-purple), var(--accent-violet)); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 36px;">📱</div>
                        <div style="flex: 1;">
                            <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 4px;">Short Form Editing</h3>
                            <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">Reels, Shorts, TikTok</p>
                            <div style="display: flex; gap: 12px;">
                                <span class="filter-chip">From $49</span>
                                <span class="filter-chip">24-72h</span>
                            </div>
                        </div>
                    </div>
                    <div class="card" onclick="navigate('builder-1')" style="display: flex; align-items: center; gap: 16px; cursor: pointer;">
                        <div style="width: 80px; height: 80px; background: linear-gradient(135deg, var(--accent-teal), var(--accent-blue)); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 36px;">🎬</div>
                        <div style="flex: 1;">
                            <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 4px;">YouTube Editing</h3>
                            <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">Long-form content</p>
                            <div style="display: flex; gap: 12px;">
                                <span class="filter-chip">From $149</span>
                                <span class="filter-chip">3-5 days</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="projects" class="screen">
            <div style="padding: 48px 20px 20px;">
                <h1 style="font-size: 32px; font-weight: 700; margin-bottom: 24px;">Projects</h1>
                <div style="display: flex; gap: 12px; margin-bottom: 24px; overflow-x: auto;">
                    <div class="category-pill active">Active</div>
                    <div class="category-pill">In Review</div>
                    <div class="category-pill">Completed</div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div class="card" onclick="navigate('tracking')" style="cursor: pointer;">
                        <div style="display: flex; gap: 16px;">
                            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--accent-purple), var(--accent-violet)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px;">🎬</div>
                            <div style="flex: 1;">
                                <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">Instagram Reels - Travel Vlog</h3>
                                <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">Last updated: 2 hours ago</p>
                                <span style="padding: 4px 12px; background: rgba(59, 130, 246, 0.2); border: 1px solid var(--accent-blue); border-radius: 12px; font-size: 12px; color: var(--accent-blue);">In Progress</span>
                            </div>
                        </div>
                    </div>
                    <div class="card" style="opacity: 0.7;">
                        <div style="display: flex; gap: 16px;">
                            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--accent-teal), var(--accent-blue)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px;">🎥</div>
                            <div style="flex: 1;">
                                <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">YouTube - Product Review</h3>
                                <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">Last updated: Yesterday</p>
                                <span style="padding: 4px 12px; background: rgba(168, 85, 247, 0.2); border: 1px solid var(--accent-purple); border-radius: 12px; font-size: 12px; color: var(--accent-purple);">Revision</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="profile" class="screen">
            <div style="padding: 48px 20px 20px;">
                <div class="card" style="text-align: center; margin-bottom: 24px;">
                    <div style="width: 80px; height: 80px; background: linear-gradient(135deg, var(--accent-purple), var(--accent-violet)); border-radius: 50%; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 36px;">👤</div>
                    <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Creator Name</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 16px;">YouTuber</p>
                    <div style="display: flex; justify-content: space-around; padding-top: 16px; border-top: 1px solid var(--glass-border);">
                        <div><div style="font-size: 24px; font-weight: 700;">12</div><div style="font-size: 12px; color: var(--text-secondary);">Projects</div></div>
                        <div><div style="font-size: 24px; font-weight: 700;">3</div><div style="font-size: 12px; color: var(--text-secondary);">Active</div></div>
                        <div><div style="font-size: 24px; font-weight: 700;">9</div><div style="font-size: 12px; color: var(--text-secondary);">Completed</div></div>
                    </div>
                </div>
                <div class="card" style="margin-bottom: 16px;">
                    <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Account</h3>
                    <div style="padding: 12px 0; border-bottom: 1px solid var(--glass-border);">Email</div>
                    <div style="padding: 12px 0; border-bottom: 1px solid var(--glass-border);">Phone</div>
                    <div style="padding: 12px 0;">Password</div>
                </div>
                <div class="card" style="margin-bottom: 16px;">
                    <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Billing</h3>
                    <div style="padding: 12px 0; border-bottom: 1px solid var(--glass-border);">Payment Methods</div>
                    <div style="padding: 12px 0;">Invoice History</div>
                </div>
                <button class="btn-pill btn-secondary" style="width: 100%; margin-bottom: 12px;">Contact Support</button>
                <button class="btn-pill btn-secondary" style="width: 100%;">Log Out</button>
            </div>
        </div>
        <div id="builder-1" class="screen">
            <div style="padding: 48px 20px 20px;">
                <div style="height: 4px; background: var(--glass-bg); border-radius: 4px; margin-bottom: 32px;">
                    <div style="height: 100%; width: 20%; background: linear-gradient(90deg, var(--accent-purple), var(--accent-violet)); border-radius: 4px;"></div>
                </div>
                <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 8px;">Select Package</h2>
                <p style="color: var(--text-secondary); margin-bottom: 32px;">Step 1 of 5</p>
                <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 150px;">
                    <div class="card" style="cursor: pointer; border: 2px solid var(--accent-purple);">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                            <h3 style="font-size: 20px; font-weight: 700;">Basic</h3>
                            <div style="text-align: right;"><div style="font-size: 24px; font-weight: 700;">$49</div><div style="font-size: 12px; color: var(--text-secondary);">24-48h</div></div>
                        </div>
                        <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">Perfect for quick social media content</p>
                        <div style="font-size: 13px;">✓ Up to 60s duration<br>✓ Basic transitions<br>✓ 1 revision</div>
                    </div>
                    <div class="card" style="cursor: pointer;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                            <h3 style="font-size: 20px; font-weight: 700;">Advanced</h3>
                            <div style="text-align: right;"><div style="font-size: 24px; font-weight: 700;">$99</div><div style="font-size: 12px; color: var(--text-secondary);">48-72h</div></div>
                        </div>
                        <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">Professional quality with extras</p>
                        <div style="font-size: 13px;">✓ Up to 3min duration<br>✓ Advanced effects<br>✓ 2 revisions<br>✓ Color grading</div>
                    </div>
                </div>
                <div style="position: fixed; bottom: 90px; left: 0; right: 0; padding: 20px; background: linear-gradient(to top, var(--bg-primary) 80%, transparent); display: flex; gap: 12px; max-width: 428px; margin: 0 auto;">
                    <button class="btn-pill btn-secondary" onclick="navigate('services')" style="flex: 1;">Back</button>
                    <button class="btn-pill btn-primary" onclick="navigate('builder-2')" style="flex: 1;">Next</button>
                </div>
            </div>
        </div>
        <div id="builder-2" class="screen">
            <div style="padding: 48px 20px 20px;">
                <div style="height: 4px; background: var(--glass-bg); border-radius: 4px; margin-bottom: 32px;">
                    <div style="height: 100%; width: 40%; background: linear-gradient(90deg, var(--accent-purple), var(--accent-violet)); border-radius: 4px;"></div>
                </div>
                <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 8px;">Configure Options</h2>
                <p style="color: var(--text-secondary); margin-bottom: 32px;">Step 2 of 5</p>
                <div class="card" style="margin-bottom: 16px;">
                    <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Add-ons</h3>
                    <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--glass-border);">
                        <span>Subtitles (+$15)</span>
                        <input type="checkbox" style="width: 20px; height: 20px;">
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--glass-border);">
                        <span>Custom Thumbnail (+$25)</span>
                        <input type="checkbox" style="width: 20px; height: 20px;">
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 12px 0;">
                        <span>Sound Design (+$30)</span>
                        <input type="checkbox" style="width: 20px; height: 20px;">
                    </div>
                </div>
                <div class="card" style="margin-bottom: 150px;">
                    <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Estimated Total</h3>
                    <div style="font-size: 32px; font-weight: 700; background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">$49</div>
                    <p style="font-size: 13px; color: var(--text-secondary);">Delivery: 24-48 hours</p>
                </div>
                <div style="position: fixed; bottom: 90px; left: 0; right: 0; padding: 20px; background: linear-gradient(to top, var(--bg-primary) 80%, transparent); display: flex; gap: 12px; max-width: 428px; margin: 0 auto;">
                    <button class="btn-pill btn-secondary" onclick="navigate('builder-1')" style="flex: 1;">Back</button>
                    <button class="btn-pill btn-primary" onclick="navigate('builder-3')" style="flex: 1;">Next</button>
                </div>
            </div>
        </div>
        <div id="builder-3" class="screen">
            <div style="padding: 48px 20px 20px;">
                <div style="height: 4px; background: var(--glass-bg); border-radius: 4px; margin-bottom: 32px;">
                    <div style="height: 100%; width: 60%; background: linear-gradient(90deg, var(--accent-purple), var(--accent-violet)); border-radius: 4px;"></div>
                </div>
                <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 8px;">Project Brief</h2>
                <p style="color: var(--text-secondary); margin-bottom: 32px;">Step 3 of 5</p>
                <input type="text" placeholder="Project Title" style="width: 100%; padding: 14px; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 12px; color: white; margin-bottom: 16px; font-size: 16px; font-family: inherit;">
                <textarea placeholder="Describe your vision, target audience, and style preferences..." style="width: 100%; min-height: 150px; padding: 14px; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 12px; color: white; margin-bottom: 16px; font-size: 16px; font-family: inherit; resize: vertical;"></textarea>
                <div class="card" style="margin-bottom: 150px;">
                    <h3 style="font-size: 14px; font-weight: 600; margin-bottom: 12px;">Style Presets</h3>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <div style="padding: 8px 16px; background: var(--accent-purple); border-radius: 20px; font-size: 13px; cursor: pointer;">Cinematic</div>
                        <div class="glass-bar" style="padding: 8px 16px; font-size: 13px; cursor: pointer;">Trendy</div>
                        <div class="glass-bar" style="padding: 8px 16px; font-size: 13px; cursor: pointer;">Meme</div>
                        <div class="glass-bar" style="padding: 8px 16px; font-size: 13px; cursor: pointer;">Documentary</div>
                    </div>
                </div>
                <div style="position: fixed; bottom: 90px; left: 0; right: 0; padding: 20px; background: linear-gradient(to top, var(--bg-primary) 80%, transparent); display: flex; gap: 12px; max-width: 428px; margin: 0 auto;">
                    <button class="btn-pill btn-secondary" onclick="navigate('builder-2')" style="flex: 1;">Back</button>
                    <button class="btn-pill btn-primary" onclick="navigate('builder-4')" style="flex: 1;">Next</button>
                </div>
            </div>
        </div>
        <div id="builder-4" class="screen">
            <div style="padding: 48px 20px 20px;">
                <div style="height: 4px; background: var(--glass-bg); border-radius: 4px; margin-bottom: 32px;">
                    <div style="height: 100%; width: 80%; background: linear-gradient(90deg, var(--accent-purple), var(--accent-violet)); border-radius: 4px;"></div>
                </div>
                <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 8px;">Upload Files</h2>
                <p style="color: var(--text-secondary); margin-bottom: 32px;">Step 4 of 5</p>
                <div class="card" style="border: 2px dashed var(--glass-border); text-align: center; padding: 48px 24px; margin-bottom: 16px; cursor: pointer;">
                    <div style="font-size: 48px; margin-bottom: 16px;">☁️</div>
                    <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">Drop files or click to upload</h3>
                    <p style="font-size: 14px; color: var(--text-secondary);">Supports: MP4, MOV, AVI (Max 5GB)</p>
                </div>
                <button class="btn-pill btn-secondary" style="width: 100%; margin-bottom: 150px;">📎 Or paste Drive/Dropbox link</button>
                <div style="position: fixed; bottom: 90px; left: 0; right: 0; padding: 20px; background: linear-gradient(to top, var(--bg-primary) 80%, transparent); display: flex; gap: 12px; max-width: 428px; margin: 0 auto;">
                    <button class="btn-pill btn-secondary" onclick="navigate('builder-3')" style="flex: 1;">Back</button>
                    <button class="btn-pill btn-primary" onclick="navigate('builder-5')" style="flex: 1;">Next</button>
                </div>
            </div>
        </div>
        <div id="builder-5" class="screen">
            <div style="padding: 48px 20px 20px;">
                <div style="height: 4px; background: var(--glass-bg); border-radius: 4px; margin-bottom: 32px;">
                    <div style="height: 100%; width: 100%; background: linear-gradient(90deg, var(--accent-purple), var(--accent-violet)); border-radius: 4px;"></div>
                </div>
                <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 8px;">Payment</h2>
                <p style="color: var(--text-secondary); margin-bottom: 32px;">Step 5 of 5</p>
                <div class="card" style="margin-bottom: 24px;">
                    <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Order Summary</h3>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--glass-border);"><span style="color: var(--text-secondary);">Basic Package</span><span>$49</span></div>
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--glass-border);"><span style="color: var(--text-secondary);">Add-ons</span><span>$0</span></div>
                    <div style="display: flex; justify-content: space-between; padding: 16px 0; font-size: 20px; font-weight: 700;"><span>Total</span><span>$49</span></div>
                </div>
                <div class="card" style="margin-bottom: 16px;">
                    <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Payment Method</h3>
                    <button class="btn-pill btn-secondary" style="width: 100%; margin-bottom: 12px; text-align: left; padding-left: 20px;">💳 Credit Card</button>
                    <button class="btn-pill btn-secondary" style="width: 100%; text-align: left; padding-left: 20px;">📱 UPI / PayPal</button>
                </div>
                <p style="text-align: center; font-size: 12px; color: var(--text-secondary); margin-bottom: 150px;">🔒 Secure payment processing</p>
                <div style="position: fixed; bottom: 90px; left: 0; right: 0; padding: 20px; background: linear-gradient(to top, var(--bg-primary) 80%, transparent); display: flex; gap: 12px; max-width: 428px; margin: 0 auto;">
                    <button class="btn-pill btn-secondary" onclick="navigate('builder-4')" style="flex: 1;">Back</button>
                    <button class="btn-pill btn-primary" onclick="navigate('tracking')" style="flex: 1;">Pay $49</button>
                </div>
            </div>
        </div>
        <div id="tracking" class="screen">
            <div style="padding: 48px 20px 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                    <h1 style="font-size: 28px; font-weight: 700;">Project Status</h1>
                    <button style="background: none; border: none; font-size: 24px; cursor: pointer;">⋮</button>
                </div>
                <div class="card" style="margin-bottom: 24px;">
                    <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 4px;">Instagram Reels - Travel Vlog</h2>
                    <span style="padding: 4px 12px; background: rgba(59, 130, 246, 0.2); border: 1px solid var(--accent-blue); border-radius: 12px; font-size: 12px; color: var(--accent-blue);">In Progress</span>
                </div>
                <div class="card" style="margin-bottom: 24px;">
                    <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 20px;">Timeline</h3>
                    <div style="position: relative; padding-left: 32px;">
                        <div style="position: absolute; left: 7px; top: 0; bottom: 0; width: 2px; background: var(--glass-border);"></div>
                        <div style="margin-bottom: 24px; position: relative;">
                            <div style="position: absolute; left: -32px; width: 16px; height: 16px; background: var(--accent-purple); border-radius: 50%;"></div>
                            <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Order Placed ✓</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">Nov 20, 10:30 AM</div>
                        </div>
                        <div style="margin-bottom: 24px; position: relative;">
                            <div style="position: absolute; left: -32px; width: 16px; height: 16px; background: var(--accent-purple); border-radius: 50%;"></div>
                            <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Editor Assigned ✓</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">Nov 20, 2:15 PM</div>
                        </div>
                        <div style="margin-bottom: 24px; position: relative;">
                            <div style="position: absolute; left: -32px; width: 16px; height: 16px; background: linear-gradient(135deg, var(--accent-purple), var(--accent-violet)); border-radius: 50%; box-shadow: var(--shadow-glow);"></div>
                            <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Editing in Progress</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">Est. Nov 21, 5:00 PM</div>
                        </div>
                        <div style="margin-bottom: 24px; position: relative; opacity: 0.5;">
                            <div style="position: absolute; left: -32px; width: 16px; height: 16px; background: var(--glass-bg); border: 2px solid var(--glass-border); border-radius: 50%;"></div>
                            <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Preview Ready</div>
                        </div>
                        <div style="position: relative; opacity: 0.5;">
                            <div style="position: absolute; left: -32px; width: 16px; height: 16px; background: var(--glass-bg); border: 2px solid var(--glass-border); border-radius: 50%;"></div>
                            <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Final Delivered</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Files</h3>
                    <div style="padding: 12px; background: var(--glass-bg); border-radius: 12px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
                        <div><div style="font-size: 14px; font-weight: 500;">raw_footage.mp4</div><div style="font-size: 12px; color: var(--text-secondary);">245 MB</div></div>
                        <span>📁</span>
                    </div>
                    <div style="padding: 12px; background: var(--glass-bg); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; opacity: 0.5;">
                        <div><div style="font-size: 14px; font-weight: 500;">final_edit.mp4</div><div style="font-size: 12px; color: var(--text-secondary);">Coming soon...</div></div>
                        <span>⬇️</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderBottomNav() {
    return `
        <div class="bottom-nav">
            <div class="nav-item" data-screen="home" onclick="event.stopPropagation(); navigate('home');">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                <span class="nav-label">Home</span>
            </div>
            <div class="nav-item" data-screen="services" onclick="event.stopPropagation(); navigate('services');">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
                <span class="nav-label">Services</span>
            </div>
            <div class="nav-item" data-screen="projects" onclick="event.stopPropagation(); navigate('projects');">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>
                <span class="nav-label">Projects</span>
            </div>
            <div class="nav-item" data-screen="profile" onclick="event.stopPropagation(); navigate('profile');">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                <span class="nav-label">Profile</span>
            </div>
        </div>
    `;
}

function attachEventListeners() {
    // Event delegation is already handled via onclick in HTML
}

// Initialize on load
init();
