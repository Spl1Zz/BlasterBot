
// Kit data
const kits = [
    // Combat & PVP Kits
    { title: "Standard/Classic Kit", command: "?kit classic", image: "kits/classic.png", category: "combat", featured: true },
    { title: "CPVP 1 Kit", command: "?kit cpvp1", image: "kits/cpvp1.png", category: "combat" },
    { title: "CPVP 2 Kit", command: "?kit cpvp2", image: "kits/cpvp2.png", category: "combat" },
    { title: "Bow and Shield PVP Kit", command: "?kit bow", image: "kits/bow.png", category: "combat" },
    { title: "Gear/Armor Kit", command: "?kit gear", image: "kits/gear.png", category: "combat" },
    
    // Building & Construction Kits
    { title: "Glass Build Kit", command: "?kit glass", image: "kits/glass.png", category: "building", featured: true },
    { title: "Deepslate Build Kit", command: "?kit deepslate", image: "kits/deepslate.png", category: "building" },
    { title: "Wool Build Kit", command: "?kit wool", image: "kits/wool.png", category: "building" },
    { title: "Concrete Build Kit", command: "?kit concrete", image: "kits/concrete.png", category: "building" },
    { title: "Concrete Powder Build Kit", command: "?kit powder", image: "kits/powder.png", category: "building" },
    { title: "Ancient City Build Kit", command: "?kit ancient", image: "kits/ancient.png", category: "building" },
    { title: "Wood Kit", command: "?kit wood", image: "kits/wood.png", category: "building" },
    { title: "Oak House Build Kit", command: "?kit oakhouse", image: "kits/oakhouse.png", category: "building" },
    { title: "Build V1 Kit", command: "?kit build1", image: "kits/buildv1.png", category: "building" },
    { title: "Fortress Build Kit", command: "?kit fortress", image: "kits/fortress.png", category: "building" },
    
    // Utility & Tools Kits
    { title: "Dupe Kit", command: "?kit dupe", image: "kits/dupe.png", category: "utility", featured: true },
    { title: "Travel Kit", command: "?kit travel", image: "kits/travel.png", category: "utility" },
    { title: "Shulker Box Kit", command: "?kit shulker", image: "kits/shulker.png", category: "utility" },
    { title: "Highway Kit", command: "?kit highway", image: "kits/highway.png", category: "utility" },
    { title: "Tree Farm Kit", command: "?kit tree", image: "kits/tree.png", category: "utility" },
    { title: "Lighting Kit", command: "?kit light", image: "kits/light.png", category: "utility" },
    { title: "Beacon Kit", command: "?kit beacon", image: "kits/beacon.png", category: "utility" },
    { title: "Enchanting Kit", command: "?kit enchantment", image: "kits/enchantment.png", category: "utility" },
    
    // Special & Unique Kits
    { title: "Bedtrap Kit", command: "?kit bedtrap", image: "kits/bedtrap.png", category: "special" },
    { title: "Grief Kit", command: "?kit grief", image: "kits/grief.png", category: "special" },
    { title: "Lavacasting Kit", command: "?kit lavacast", image: "kits/lavacast.png", category: "special" },
    { title: "Redstone Kit (Thanks to Manue_l)", command: "?kit redstone", image: "kits/redstone.png", category: "special" },
    { title: "Ores/Shiny Kit", command: "?kit shiny", image: "kits/shiny.png", category: "special" },
    { title: "Armor Trims Kit (Thanks to Al_Kapwn)", command: "?kit trims", image: "kits/trims.png", category: "special" },
];

const kitCategories = {
    combat: "Combat & PVP",
    building: "Building & Construction", 
    utility: "Utility & Tools",
    special: "Special & Unique"
};

let currentCategory = 'all';
let currentSearchTerm = '';

// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId + '-page').classList.add('active');
    
    // Initialize kits page if showing kits
    if (pageId === 'kits') {
        initializeKitsPage();
    }
}

// Initialize kits page
function initializeKitsPage() {
    renderFeaturedKits();
    renderKits();
}

// Category filtering
function setCategory(category) {
    currentCategory = category;
    
    // Update button states
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('btn-elegant');
        btn.classList.add('btn-luxury');
    });
    
    const activeBtn = document.querySelector(`[data-category="${category}"]`);
    activeBtn.classList.add('active');
    activeBtn.classList.remove('btn-luxury');
    activeBtn.classList.add('btn-elegant');
    
    // Show/hide featured section and category title
    const featuredSection = document.getElementById('featured-section');
    const categoryTitle = document.getElementById('category-title');
    
    if (category === 'all' && !currentSearchTerm) {
        featuredSection.style.display = 'block';
        categoryTitle.style.display = 'none';
    } else {
        featuredSection.style.display = 'none';
        if (category !== 'all') {
            categoryTitle.textContent = kitCategories[category];
            categoryTitle.style.display = 'block';
        } else {
            categoryTitle.style.display = 'none';
        }
    }
    
    renderKits();
}

// Search functionality
function filterKits() {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    currentSearchTerm = searchInput.value.toLowerCase();
    
    // Show/hide clear button
    if (currentSearchTerm) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
    
    // Hide featured section if searching
    const featuredSection = document.getElementById('featured-section');
    if (currentSearchTerm) {
        featuredSection.style.display = 'none';
    } else if (currentCategory === 'all') {
        featuredSection.style.display = 'block';
    }
    
    renderKits();
}

function clearSearch() {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    
    searchInput.value = '';
    currentSearchTerm = '';
    clearBtn.classList.add('hidden');
    
    // Show featured section if on all category
    if (currentCategory === 'all') {
        document.getElementById('featured-section').style.display = 'block';
    }
    
    renderKits();
}

// Get filtered kits
function getFilteredKits() {
    return kits.filter(kit => {
        const matchesSearch = kit.title.toLowerCase().includes(currentSearchTerm) || 
                             kit.command.toLowerCase().includes(currentSearchTerm);
        const matchesCategory = currentCategory === 'all' || kit.category === currentCategory;
        return matchesSearch && matchesCategory;
    });
}

// Render featured kits
function renderFeaturedKits() {
    const featuredKits = kits.filter(kit => kit.featured);
    const container = document.getElementById('featured-kits');
    
    container.innerHTML = featuredKits.map((kit, index) => `
        <div style="animation-delay: ${index * 0.1}s" class="transform hover:scale-105 transition-transform duration-300">
            ${createKitCard(kit, true)}
        </div>
    `).join('');
}

// Render kits
function renderKits() {
    const filteredKits = getFilteredKits();
    const container = document.getElementById('kits-grid');
    const noResults = document.getElementById('no-results');
    
    if (filteredKits.length === 0) {
        container.style.display = 'none';
        noResults.classList.remove('hidden');
    } else {
        container.style.display = 'grid';
        noResults.classList.add('hidden');
        
        container.innerHTML = filteredKits.map((kit, index) => `
            <div style="animation-delay: ${index * 0.1}s" class="animate-scale-in">
                ${createKitCard(kit)}
            </div>
        `).join('');
    }
}

// Create kit card HTML
function createKitCard(kit, featured = false) {
    const kitId = kit.command.replace(/[^a-zA-Z0-9]/g, '');
    
    return `
        <div class="kit-card ${featured ? 'featured' : ''}" data-kit="${kitId}">
            ${featured ? `
                <div class="featured-badge">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Featured
                </div>
            ` : ''}
            
            <div class="kit-card-header" onclick="toggleKitCard('${kitId}')">
                <span class="kit-card-title">${kit.title}</span>
                <svg class="kit-card-chevron" id="chevron-${kitId}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </div>
            
            <div class="kit-card-content" id="content-${kitId}">
                <div class="kit-card-inner">
                    ${kit.image ? `
                        <div class="relative group">
                            <img 
                                src="${kit.image}" 
                                alt="${kit.title}"
                                class="kit-card-image"
                            >
                            <div class="absolute inset-0 bg-luxury-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                        </div>
                    ` : ''}
                    
                    <div class="kit-card-command-section">
                        <div class="kit-card-command">
                            <code class="kit-card-code">${kit.command}</code>
                        </div>
                        <button 
                            onclick="copyCommand('${kit.command}', this)"
                            class="btn btn-elegant btn-sm shadow-gold hover:shadow-intense-gold"
                        >
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                            </svg>
                            Copy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Toggle kit card
function toggleKitCard(kitId) {
    const content = document.getElementById(`content-${kitId}`);
    const chevron = document.getElementById(`chevron-${kitId}`);
    
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        chevron.classList.remove('rotated');
    } else {
        content.classList.add('open');
        chevron.classList.add('rotated');
    }
}

// Copy command to clipboard
async function copyCommand(command, button) {
    try {
        await navigator.clipboard.writeText(command);
        
        // Update button text
        const originalHtml = button.innerHTML;
        button.innerHTML = `
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polyline points="20,6 9,17 4,12"/>
            </svg>
            Copied!
        `;
        
        // Show toast-like notification
        showToast('Copied to clipboard!', `Command "${command}" has been copied.`);
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalHtml;
        }, 2000);
    } catch (err) {
        showToast('Copy failed', 'Please copy the command manually.', 'error');
    }
}

// Simple toast notification
function showToast(title, description, type = 'success') {
    // Remove existing toast
    const existingToast = document.getElementById('toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = `fixed top-4 right-4 bg-card border-2 border-primary-30 rounded-lg p-4 shadow-intense-gold z-50 animate-slide-in`;
    toast.style.maxWidth = '420px';
    
    toast.innerHTML = `
        <div class="flex items-start">
            <div class="flex-1">
                <h4 class="text-sm font-semibold text-foreground">${title}</h4>
                <p class="text-sm text-muted-foreground mt-1">${description}</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-muted-foreground hover:text-foreground">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 4000);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Show home page by default
    showPage('home');
    
    // Add event listener for search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', filterKits);
    }
});
