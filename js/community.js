// /home/ubuntu/app/fitcore_pro/js/community.js
// Community Portal JavaScript functionality

// Global state management
const CommunityState = {
    currentChallenge: null,
    userProgress: {},
    transformationFilter: 'all',
    modalOpen: false
};

// Utility functions
const Utils = {
    // Smooth scroll to section
    scrollToSection: (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },

    // Format date for display
    formatDate: (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    },

    // Generate random progress for demo
    generateProgress: () => Math.floor(Math.random() * 100),

    // Handle image loading errors
    handleImageError: (img, fallbackSrc) => {
        img.onerror = null;
        img.src = fallbackSrc;
    }
};

// Transformation Gallery functionality
const TransformationGallery = {
    // Filter transformations by category
    filterTransformations: (category) => {
        const items = document.querySelectorAll('.transformation-item');
        const filters = document.querySelectorAll('.transformation-filter');
        
        // Update active filter styling
        filters.forEach(filter => {
            filter.classList.remove('active', 'bg-accent', 'text-white');
            filter.classList.add('bg-surface', 'text-text-primary');
        });
        
        const activeFilter = event?.target || document.querySelector(`[onclick*="${category}"]`);
        if (activeFilter) {
            activeFilter.classList.add('active', 'bg-accent', 'text-white');
            activeFilter.classList.remove('bg-surface', 'text-text-primary');
        }
        
        // Filter transformation items
        items.forEach(item => {
            const itemCategory = item.dataset.category;
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.3s ease-in';
            } else {
                item.style.display = 'none';
            }
        });
        
        CommunityState.transformationFilter = category;
    },

    // Load more transformations (simulated)
    loadMoreTransformations: () => {
        // In a real app, this would fetch from an API
        console.log('Loading more transformations...');
        // Add loading animation or new content here
    }
};

// Modal functionality
const Modal = {
    // Transformation stories data
    transformationStories: {
        'sarah': {
            name: 'Sarah Martinez',
            title: '6-Month Weight Loss Transformation',
            beforeImg: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600',
            afterImg: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600',
            story: 'When I started at FitCore Pro, I was 35 pounds overweight and struggling with low energy levels. The combination of HIIT classes and personalized nutrition guidance completely transformed my life. The community support was incredible - having accountability partners and celebrating small wins together made all the difference. I not only lost the weight but gained confidence, strength, and lifelong healthy habits.',
            stats: ['-35 lbs', '6 months', 'HIIT + Strength', '98% consistency'],
            timeline: 'Started: January 2024 | Goal Reached: July 2024',
            program: 'HIIT Blast + Strength Training',
            trainer: 'Sarah Chen',
            achievements: ['Weight Loss Champion', 'Consistency King', 'Community Support']
        },
        'mike': {
            name: 'Mike Rodriguez',
            title: '8-Month Muscle Building Journey',
            beforeImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
            afterImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
            story: 'I came to FitCore Pro as a skinny guy wanting to build muscle and strength. The progressive strength training program and expert guidance from the trainers helped me gain 25 pounds of lean muscle. Learning proper form and nutrition was key. The community challenges kept me motivated, and tracking my progress with fellow members made the journey enjoyable.',
            stats: ['+25 lbs muscle', '8 months', 'Strength Training', '2x strength increase'],
            timeline: 'Started: May 2023 | Current: January 2024',
            program: 'Progressive Strength Training',
            trainer: 'Marcus Rodriguez',
            achievements: ['Strength Warrior', 'Muscle Builder', 'Form Master']
        },
        'emma': {
            name: 'Emma Thompson',
            title: 'Chronic Pain Recovery Story',
            beforeImg: 'https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1868761_960_720.jpg',
            afterImg: 'https://images.pixabay.com/photo/2017/08/07/14/02/man-2604149_960_720.jpg',
            story: 'After years of chronic back pain from sitting at a desk job, I found FitCore Pro\'s functional movement program. Dr. Lisa Park worked with me to address my specific needs. Through targeted exercises and mobility work, I\'m now pain-free and stronger than ever. I can keep up with my kids and even completed my first 5K race!',
            stats: ['Pain-free', '4 months', 'Functional Movement', '100% mobility'],
            timeline: 'Started: September 2024 | Milestone: December 2024',
            program: 'Functional Movement & Recovery',
            trainer: 'Dr. Lisa Park',
            achievements: ['Recovery Champion', 'Mobility Master', 'Life Changer']
        },
        'alex': {
            name: 'Alex Johnson',
            title: 'Strength Training Mastery',
            beforeImg: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
            afterImg: 'https://images.pixabay.com/photo/2017/08/07/14/02/man-2604149_960_720.jpg',
            story: 'Doubled my deadlift from 185 to 375 lbs! The progressive strength program and community support pushed me beyond my limits. The key was consistency, proper programming, and having workout partners who challenged me every session.',
            stats: ['375 lbs deadlift', '10 months', 'Strength Focus', '100% PRs'],
            timeline: 'Started: March 2023 | Latest PR: January 2024',
            program: 'Advanced Strength Training',
            trainer: 'Marcus Rodriguez',
            achievements: ['Strength Warrior', 'PR Crusher', 'Iron Lifter']
        },
        'jessica': {
            name: 'Jessica Chen',
            title: 'Complete Lifestyle Transformation',
            beforeImg: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600',
            afterImg: 'https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1868761_960_720.jpg',
            story: 'Lost 42 pounds and discovered a love for fitness I never knew I had. The nutrition guidance was a game-changer, and the supportive community made every workout enjoyable. I went from hating exercise to it being the highlight of my day.',
            stats: ['-42 lbs', '5 months', 'HIIT + Nutrition', '95% adherence'],
            timeline: 'Started: August 2024 | Goal Reached: December 2024',
            program: 'HIIT Blast + Nutrition Coaching',
            trainer: 'Sarah Chen',
            achievements: ['Transformation Star', 'Nutrition Expert', 'Community Champion']
        },
        'carlos': {
            name: 'Carlos Rivera',
            title: 'Ultimate Muscle Building Success',
            beforeImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
            afterImg: 'https://images.pixabay.com/photo/2017/08/07/14/02/man-2604149_960_720.jpg',
            story: 'Gained 30 pounds of muscle and completely transformed my physique over 12 months. The expert guidance, progressive programming, and community accountability were the perfect combination for success.',
            stats: ['+30 lbs muscle', '12 months', 'Strength + Hypertrophy', '99% consistency'],
            timeline: 'Started: January 2023 | Completed: December 2023',
            program: 'Advanced Muscle Building',
            trainer: 'Marcus Rodriguez',
            achievements: ['Muscle Master', 'Consistency King', 'Transformation Legend']
        }
    },

    // Open transformation modal
    openTransformationModal: (memberId) => {
        const modal = document.getElementById('transformationModal');
        const content = document.getElementById('modalContent');
        
        if (!modal || !content) {
            console.error('Modal elements not found');
            return;
        }
        
        const story = Modal.transformationStories[memberId];
        if (!story) {
            console.error('Story not found for member:', memberId);
            return;
        }
        
        content.innerHTML = Modal.generateModalContent(story);
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        CommunityState.modalOpen = true;
        
        // Add escape key listener
        document.addEventListener('keydown', Modal.handleEscapeKey);
    },

    // Close transformation modal
    closeTransformationModal: () => {
        const modal = document.getElementById('transformationModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            CommunityState.modalOpen = false;
            
            // Remove escape key listener
            document.removeEventListener('keydown', Modal.handleEscapeKey);
        }
    },

    // Handle escape key press
    handleEscapeKey: (e) => {
        if (e.key === 'Escape' && CommunityState.modalOpen) {
            Modal.closeTransformationModal();
        }
    },

    // Generate modal content HTML
    generateModalContent: (story) => {
        return `
            <div class="grid lg:grid-cols-2 gap-8">
                <div>
                    <h4 class="font-montserrat font-semibold text-primary mb-4">${story.title}</h4>
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <p class="text-sm text-text-secondary mb-2">Before</p>
                            <img src="${story.beforeImg}" alt="Before transformation" class="w-full h-64 object-cover rounded-lg" 
                                 onerror="this.src='https://images.pixabay.com/photo/2017/08/07/14/02/man-2604149_960_720.jpg'" />
                        </div>
                        <div>
                            <p class="text-sm text-text-secondary mb-2">After</p>
                            <img src="${story.afterImg}" alt="After transformation" class="w-full h-64 object-cover rounded-lg" 
                                 onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1868761_960_720.jpg'" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 text-center mb-6">
                        ${story.stats.map(stat => `
                            <div class="bg-background p-3 rounded-lg">
                                <div class="font-semibold text-accent">${stat}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="bg-background p-4 rounded-lg">
                        <h5 class="font-semibold text-primary mb-2">Program & Trainer</h5>
                        <p class="text-text-secondary text-sm mb-1">${story.program}</p>
                        <p class="text-text-secondary text-sm">Trainer: ${story.trainer}</p>
                    </div>
                </div>
                <div>
                    <div class="flex items-center space-x-3 mb-6">
                        <img src="${story.afterImg}" alt="${story.name}" class="w-16 h-16 rounded-full object-cover" 
                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1868761_960_720.jpg'" />
                        <div>
                            <h4 class="font-montserrat font-semibold text-primary">${story.name}</h4>
                            <p class="text-text-secondary text-sm">${story.timeline}</p>
                        </div>
                    </div>
                    <div class="prose max-w-none mb-6">
                        <p class="text-text-secondary leading-relaxed">${story.story}</p>
                    </div>
                    <div class="bg-background p-4 rounded-lg mb-6">
                        <h5 class="font-semibold text-primary mb-3">Achievements Earned</h5>
                        <div class="flex flex-wrap gap-2">
                            ${story.achievements.map(achievement => `
                                <span class="bg-accent/20 text-accent text-xs px-3 py-1 rounded-full font-semibold">${achievement}</span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="flex space-x-4">
                        <button class="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-lg font-semibold transition-quick" 
                                onclick="CommunityActions.likeStory('${story.name}')">
                            👍 Like Story
                        </button>
                        <button class="border border-border hover:border-accent text-text-primary hover:text-accent px-6 py-2 rounded-lg font-semibold transition-quick" 
                                onclick="CommunityActions.shareStory('${story.name}')">
                            📤 Share
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
};

// Community Actions
const CommunityActions = {
    // Like a transformation story
    likeStory: (storyName) => {
        console.log(`Liked story by ${storyName}`);
        // In real app, would send API request
        // Show success feedback
        CommunityActions.showNotification(`You liked ${storyName}'s transformation story! 👍`, 'success');
    },

    // Share a transformation story
    shareStory: (storyName) => {
        console.log(`Shared story by ${storyName}`);
        if (navigator.share) {
            navigator.share({
                title: `${storyName}'s Transformation Story`,
                text: `Check out this amazing transformation story from FitCore Pro!`,
                url: window.location.href
            });
        } else {
            // Fallback for browsers without Web Share API
            navigator.clipboard.writeText(window.location.href).then(() => {
                CommunityActions.showNotification('Link copied to clipboard! 📋', 'success');
            });
        }
    },

    // Join challenge
    joinChallenge: (challengeId) => {
        console.log(`Joined challenge: ${challengeId}`);
        CommunityActions.showNotification('Successfully joined the 30-Day Consistency Challenge! 🎯', 'success');
        // Update UI to show joined state
    },

    // Find accountability partner
    connectWithPartner: (partnerId) => {
        console.log(`Connecting with partner: ${partnerId}`);
        CommunityActions.showNotification('Connection request sent! 🤝', 'success');
    },

    // Post to community feed
    createPost: (content, type = 'general') => {
        console.log(`Creating ${type} post:`, content);
        CommunityActions.showNotification('Post shared with the community! 🎉', 'success');
    },

    // Show notification
    showNotification: (message, type = 'info') => {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
        
        // Set notification style based on type
        const styles = {
            success: 'bg-success text-white',
            error: 'bg-error text-white',
            warning: 'bg-warning text-white',
            info: 'bg-primary text-white'
        };
        
        notification.className += ` ${styles[type] || styles.info}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
};

// Challenge functionality
const ChallengeManager = {
    // Get current challenge data
    getCurrentChallenge: () => {
        // In real app, this would fetch from API
        return {
            id: 'consistency-30-day',
            name: '30-Day Consistency Challenge',
            description: 'Complete at least 20 workouts in 30 days',
            participants: 127,
            daysLeft: 12,
            progress: 64,
            rewards: [
                'Top 3 Winners: Free personal training session',
                'All Finishers: Digital achievement badge',
                'Community Recognition: Featured member spotlight'
            ]
        };
    },

    // Update challenge progress
    updateProgress: (challengeId, progress) => {
        console.log(`Updating challenge ${challengeId} progress to ${progress}%`);
        // Update progress bar and statistics
    }
};

// Forum functionality
const ForumManager = {
    // Load forum posts
    loadPosts: (category = 'all', limit = 10) => {
        console.log(`Loading ${limit} posts from category: ${category}`);
        // In real app, would fetch from API
    },

    // Create new post
    createPost: (content, attachments = []) => {
        console.log('Creating new forum post:', { content, attachments });
        CommunityActions.showNotification('Post created successfully! 📝', 'success');
    },

    // React to post (like, comment, share)
    reactToPost: (postId, reaction) => {
        console.log(`Reacting to post ${postId} with ${reaction}`);
        CommunityActions.showNotification(`${reaction} added! 👍`, 'success');
    }
};

// Progress tracking
const ProgressTracker = {
    // Upload progress photos
    uploadProgress: (formData) => {
        console.log('Uploading progress data:', formData);
        CommunityActions.showNotification('Progress uploaded successfully! 📸', 'success');
    },

    // Update measurements
    updateMeasurements: (measurements) => {
        console.log('Updating measurements:', measurements);
        CommunityState.userProgress = { ...CommunityState.userProgress, ...measurements };
    },

    // Get user progress stats
    getProgressStats: () => {
        return {
            daysActive: 127,
            weightChange: -23,
            strengthIncrease: 12,
            milestoneProgress: 78
        };
    }
};

// Event handlers
const EventHandlers = {
    // Initialize all event listeners
    init: () => {
        // Modal close handlers
        const modal = document.getElementById('transformationModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    Modal.closeTransformationModal();
                }
            });
        }

        // Form submission handlers
        EventHandlers.initFormHandlers();
        
        // Image error handlers
        EventHandlers.initImageErrorHandlers();
        
        // Intersection observer for animations
        EventHandlers.initScrollAnimations();
    },

    // Initialize form handlers
    initFormHandlers: () => {
        // Progress upload form
        const progressForm = document.querySelector('#progressUploadForm');
        if (progressForm) {
            progressForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(progressForm);
                ProgressTracker.uploadProgress(formData);
            });
        }

        // Community post form
        const postForm = document.querySelector('#communityPostForm');
        if (postForm) {
            postForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const content = postForm.querySelector('textarea').value;
                ForumManager.createPost(content);
            });
        }
    },

    // Initialize image error handlers
    initImageErrorHandlers: () => {
        const images = document.querySelectorAll('img[data-fallback]');
        images.forEach(img => {
            img.addEventListener('error', () => {
                const fallback = img.dataset.fallback;
                if (fallback && img.src !== fallback) {
                    img.src = fallback;
                }
            });
        });
    },

    // Initialize scroll animations
    initScrollAnimations: () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe transformation cards
        const transformationCards = document.querySelectorAll('.transformation-item');
        transformationCards.forEach(card => observer.observe(card));
    }
};

// Global functions for HTML onclick handlers
window.scrollToSection = Utils.scrollToSection;
window.filterTransformations = TransformationGallery.filterTransformations;
window.openTransformationModal = Modal.openTransformationModal;
window.closeTransformationModal = Modal.closeTransformationModal;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    EventHandlers.init();
    console.log('Community Portal JavaScript initialized successfully');
});

// Export for module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Utils,
        TransformationGallery,
        Modal,
        CommunityActions,
        ChallengeManager,
        ForumManager,
        ProgressTracker,
        EventHandlers
    };
}