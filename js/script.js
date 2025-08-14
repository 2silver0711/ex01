// Global Variables
let currentPage = 'home';
let currentProject = null;

// Project Data
const projectsData = {
    'healthcare-app': {
        id: 'healthcare-app',
        title: '헬스케어 모바일 앱',
        subtitle: '사용자의 건강 관리를 위한 종합 솔루션',
        category: 'Mobile App',
        year: '2024',
        duration: '8개월',
        role: 'Lead UX/UI Designer',
        team: '디자이너 4명, 기획 4명',
        tools: ['Figma', 'Principle', 'Adobe Illustrator', 'Maze'],
        challenge: '복잡한 건강 데이터를 사용자가 쉽게 이해하고 관리할 수 있도록 하는 것이 주요 과제였습니다. 또한 다양한 연령대의 사용자를 고려한 접근성 높은 인터페이스 설계가 필요했습니다.',
        solution: '사용자 리서치를 통해 주요 페인 포인트를 파악하고, 정보 계층을 단순화했습니다. 직관적인 아이콘과 색상 시스템을 도입하여 시각적 인식을 개선하고, 단계별 온보딩 프로세스를 설계했습니다.',
        result: '사용자 테스트 결과 태스크 완료율이 85%에서 96%로 향상되었고, 앱 스토어 평점이 4.7점을 기록했습니다. DAU도 출시 후 3개월 내 40% 증가했습니다.',
        images: [
            {
                url: 'https://i.pinimg.com/1200x/53/bb/0b/53bb0ba2036a4f5d25f091a567a1360a.jpg',
                caption: '메인 대시보드 및 핵심 기능 화면'
            },
            {
                url: 'https://i.pinimg.com/1200x/53/bb/0b/53bb0ba2036a4f5d25f091a567a1360a.jpg',
                caption: '건강 데이터 시각화 인터페이스'
            },
            {
                url: 'https://i.pinimg.com/1200x/53/bb/0b/53bb0ba2036a4f5d25f091a567a1360a.jpg',
                caption: '사용자 여정 및 와이어프레임'
            }
        ],
        liveUrl: 'https://healthapp-demo.vercel.app',
        prototypeUrl: 'https://www.figma.com/proto/healthcare-app',
        pdfUrl: 'https://drive.google.com/file/d/healthcare-app-casestudy.pdf'
    },
    'dashboard': {
        id: 'dashboard',
        title: '기업용 대시보드',
        subtitle: 'B2B 데이터 시각화 플랫폼',
        category: 'Web Platform',
        year: '2024',
        duration: '4개월',
        role: 'Senior UX/UI Designer',
        team: '디자이너 3명, 개발자 5명, 데이터 분석가 2명',
        tools: ['Figma', 'Sketch', 'D3.js', 'Hotjar'],
        challenge: '복잡한 기업 데이터를 효과적으로 시각화하고, 다양한 사용자 권한에 따른 정보 접근성을 구현하는 것이 주요 과제였습니다.',
        solution: '모듈형 대시보드 구조를 설계하여 사용자가 필요한 정보만 선택적으로 볼 수 있도록 했습니다. 또한 권한별 정보 필터링 시스템을 구축했습니다.',
        result: '데이터 분석 효율성이 60% 향상되었고, 사용자 만족도 조사에서 4.5/5점을 기록했습니다.',
        images: [
            {
                url: 'https://i.pinimg.com/1200x/53/bb/0b/53bb0ba2036a4f5d25f091a567a1360a.jpg',
                caption: '메인 대시보드 인터페이스'
            },
            {
                url: 'https://i.pinimg.com/1200x/53/bb/0b/53bb0ba2036a4f5d25f091a567a1360a.jpg',
                caption: '사용자 플로우 및 정보 구조'
            }
        ],
        liveUrl: 'https://dashboard-demo.vercel.app',
        prototypeUrl: 'https://www.figma.com/proto/dashboard',
        pdfUrl: 'https://drive.google.com/file/d/dashboard-casestudy.pdf'
    },
    'ecommerce': {
        id: 'ecommerce',
        title: '이커머스 플랫폼',
        subtitle: '온라인 쇼핑 경험 혁신',
        category: 'E-commerce',
        year: '2023',
        duration: '5개월',
        role: 'UX/UI Designer',
        team: '디자이너 2명, 개발자 4명, 마케터 2명',
        tools: ['Figma', 'Adobe XD', 'Optimizely', 'Google Analytics'],
        challenge: '높은 카트 이탈률과 복잡한 결제 프로세스로 인한 컨버전율 저하가 주요 문제였습니다.',
        solution: '단계별 결제 프로세스를 재설계하고, 개인화된 상품 추천 시스템과 원클릭 결제 옵션을 도입했습니다.',
        result: '카트 이탈률 35% 감소, 컨버전율 28% 향상, 평균 주문 금액 15% 증가를 달성했습니다.',
        images: [
            {
                url: 'https://i.pinimg.com/1200x/53/bb/0b/53bb0ba2036a4f5d25f091a567a1360a.jpg',
                caption: '상품 상세 페이지 및 결제 플로우'
            },
            {
                url: 'https://i.pinimg.com/1200x/53/bb/0b/53bb0ba2036a4f5d25f091a567a1360a.jpg',
                caption: '사용자 대시보드 및 주문 관리'
            }
        ],
        liveUrl: 'https://ecommerce-demo.vercel.app',
        prototypeUrl: 'https://www.figma.com/proto/ecommerce',
        pdfUrl: 'https://drive.google.com/file/d/ecommerce-casestudy.pdf'
    }
};

// DOM Elements
const navigation = document.getElementById('navigation');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffect();
    showPage('home');
    populatePortfolioGrid();
});

// Navigation Functions
function initializeNavigation() {
    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page) {
                showPage(page);
            }
        });
    });
}

function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.add('hidden-page');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.remove('hidden-page');
    }
    
    // Update navigation active state
    updateNavigation(pageId);
    
    currentPage = pageId;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavigation(activePageId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-page="${activePageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Scroll Effect
function initializeScrollEffect() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
    });
}

// Project Functions
function showProjectDetail(projectId) {
    currentProject = projectsData[projectId];
    if (!currentProject) return;
    
    populateProjectDetail(currentProject);
    showPage('project-detail');
}

function populateProjectDetail(project) {
    // Update project info
    document.getElementById('detail-category').textContent = project.category;
    document.getElementById('detail-title').textContent = project.title;
    document.getElementById('detail-subtitle').textContent = project.subtitle;
    document.getElementById('detail-year').textContent = project.year;
    document.getElementById('detail-duration').textContent = project.duration;
    document.getElementById('detail-role').textContent = project.role;
    document.getElementById('detail-team').textContent = project.team;
    document.getElementById('detail-challenge').textContent = project.challenge;
    document.getElementById('detail-solution').textContent = project.solution;
    document.getElementById('detail-result').textContent = project.result;
    
    // Update main image
    const mainImage = document.getElementById('main-gallery-image');
    mainImage.src = project.images[0].url;
    mainImage.alt = project.images[0].caption;
    
    // Update gallery thumbnails
    populateGalleryThumbnails(project.images);
    
    // Update gallery caption
    document.getElementById('gallery-caption').textContent = project.images[0].caption;
    
    // Update tools
    populateProjectTools(project.tools);
    
    // Update action buttons
    updateActionButtons(project);
}

function populateGalleryThumbnails(images) {
    const thumbnailsContainer = document.getElementById('gallery-thumbnails');
    thumbnailsContainer.innerHTML = '';
    
    images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `gallery-thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.onclick = () => selectGalleryImage(index, images);
        
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.caption;
        
        thumbnail.appendChild(img);
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function selectGalleryImage(index, images) {
    // Update main image
    const mainImage = document.getElementById('main-gallery-image');
    mainImage.src = images[index].url;
    mainImage.alt = images[index].caption;
    
    // Update caption
    document.getElementById('gallery-caption').textContent = images[index].caption;
    
    // Update thumbnail active state
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function populateProjectTools(tools) {
    const toolsContainer = document.getElementById('detail-tools');
    toolsContainer.innerHTML = '';
    
    tools.forEach(tool => {
        const toolSpan = document.createElement('span');
        toolSpan.className = 'project-tool';
        toolSpan.textContent = tool;
        toolsContainer.appendChild(toolSpan);
    });
}

function updateActionButtons(project) {
    const liveDemoBtn = document.getElementById('live-demo-btn');
    const prototypeBtn = document.getElementById('prototype-btn');
    const pdfBtn = document.getElementById('pdf-btn');
    
    liveDemoBtn.href = project.liveUrl || '#';
    liveDemoBtn.style.display = project.liveUrl ? 'inline-block' : 'none';
    
    prototypeBtn.href = project.prototypeUrl || '#';
    prototypeBtn.style.display = project.prototypeUrl ? 'inline-block' : 'none';
    
    pdfBtn.href = project.pdfUrl || '#';
    pdfBtn.style.display = project.pdfUrl ? 'inline-block' : 'none';
}

function backToPortfolio() {
    showPage('portfolio');
}

// Portfolio Grid
function populatePortfolioGrid() {
    const portfolioGrid = document.querySelector('.portfolio-page-grid');
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    Object.values(projectsData).forEach(project => {
        const projectCard = createProjectCard(project);
        portfolioGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => showProjectDetail(project.id);
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.images[0].url}" alt="${project.title}">
        </div>
        <div class="project-content">
            <div class="project-meta">
                <span class="project-category">${project.category}</span>
                <span class="project-year">${project.year}</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.subtitle}</p>
            <div class="project-tags">
                ${project.tools.slice(0, 3).map(tool => `<span class="project-tag">${tool}</span>`).join('')}
            </div>
            <div class="project-link">
                <span>자세히 보기</span>
                <svg class="project-link-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        </div>
    `;
    
    return card;
}

// Filter Functions
function initializeFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.textContent.trim();
            filterProjects(filter);
            
            // Update active state
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const category = card.querySelector('.project-category').textContent;
        
        if (filter === 'All' || category === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Image Upload Functions (for future enhancement)
function handleImageUpload(files) {
    // This would handle actual image uploads
    // For now, it's a placeholder for the upload functionality
    console.log('Files to upload:', files);
    
    // Example implementation for local preview
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Create preview or add to gallery
                console.log('Image loaded:', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
}

// URL Copy Function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show success message
        showNotification('URL이 클립보드에 복사되었습니다!');
    }).catch(function(err) {
        console.error('Copy failed:', err);
        showNotification('복사에 실패했습니다.');
    });
}

// Notification Function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #233eff;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Form Handling
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    // Show success message
    showNotification('메시지가 전송되었습니다! 빠른 시일 내에 답변 드리겠습니다.');
    
    // Reset form
    event.target.reset();
}

// Smooth Scrolling for Anchor Links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize smooth scrolling
document.addEventListener('DOMContentLoaded', initializeSmoothScrolling);

// Lazy Loading for Images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLazyLoading();
    initializeFilters();
});

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // ESC key to go back
    if (e.key === 'Escape' && currentPage === 'project-detail') {
        backToPortfolio();
    }
    
    // Arrow keys for gallery navigation
    if (currentPage === 'project-detail') {
        const thumbnails = document.querySelectorAll('.gallery-thumbnail');
        const activeThumbnail = document.querySelector('.gallery-thumbnail.active');
        const activeIndex = Array.from(thumbnails).indexOf(activeThumbnail);
        
        if (e.key === 'ArrowLeft' && activeIndex > 0) {
            thumbnails[activeIndex - 1].click();
        } else if (e.key === 'ArrowRight' && activeIndex < thumbnails.length - 1) {
            thumbnails[activeIndex + 1].click();
        }
    }
});

// Export functions for global use
window.showPage = showPage;
window.showProjectDetail = showProjectDetail;
window.backToPortfolio = backToPortfolio;
window.copyToClipboard = copyToClipboard;
window.handleFormSubmit = handleFormSubmit;