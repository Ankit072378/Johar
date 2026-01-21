// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Data for different sections
    const destinations = [
        {
            name: "Netarhat",
            type: "Hill Station",
            rating: 4.8,
            image: "🏔️",
            description: "Queen of Chotanagpur - breathtaking sunrises and sunsets",
            highlights: ["Sunrise Point", "Magnolia Point", "Forest Lodge"],
            icon: "mountain"
        },
        {
            name: "Hundru Falls",
            type: "Waterfall",
            rating: 4.7,
            image: "💧",
            description: "98m high spectacular waterfall on Subarnarekha River",
            highlights: ["Natural Pool", "Rocky Cliffs", "Monsoon Beauty"],
            icon: "waves"
        },
        {
            name: "Betla National Park",
            type: "Wildlife Sanctuary",
            rating: 4.6,
            image: "🐅",
            description: "Home to tigers, elephants and diverse wildlife",
            highlights: ["Tiger Safari", "Elephant Rides", "Bird Watching"],
            icon: "tree-pine"
        },
        {
            name: "Deoghar Temple",
            type: "Spiritual",
            rating: 4.9,
            image: "🏛️",
            description: "Sacred Baidyanath Jyotirlinga temple complex",
            highlights: ["Baba Baidyanath", "Nandan Pahar", "Tapovan"],
            icon: "map-pin"
        },
        {
            name: "Patratu Valley",
            type: "Scenic Valley",
            rating: 4.5,
            image: "🌄",
            description: "Kashmir of Jharkhand with pristine lake views",
            highlights: ["Valley Views", "Boating", "Photography"],
            icon: "camera"
        },
        {
            name: "Tribal Villages",
            type: "Cultural Heritage",
            rating: 4.8,
            image: "🏘️",
            description: "Authentic tribal culture and traditional crafts",
            highlights: ["Handicrafts", "Folk Dance", "Local Cuisine"],
            icon: "map-pin"
        }
    ];

    const culturalEvents = [
        {
            title: "Sarhul Festival",
            date: "March 15-17, 2024",
            tribe: "Munda & Oraon",
            description: "Sacred spring festival celebrating nature and ancestors with traditional sal flowers",
            location: "Ranchi & Khunti Districts",
            type: "Religious Festival",
            icon: "heart",
            participants: "10,000+"
        },
        {
            title: "Karma Festival", 
            date: "August 20-22, 2024",
            tribe: "Santhal & Ho",
            description: "Harvest celebration with traditional Karma dance around sacred karma tree",
            location: "East Singhbhum",
            type: "Harvest Festival",
            icon: "music",
            participants: "15,000+"
        },
        {
            title: "Tusu Parab",
            date: "December 25-January 15",
            tribe: "All Tribal Communities",
            description: "Winter solstice celebration with folk songs, dances, and artistic displays",
            location: "Statewide",
            type: "Seasonal Festival",
            icon: "palette",
            participants: "50,000+"
        }
    ];

    const tribalTraditions = [
        {
            title: "Dokra Metal Craft",
            community: "Dhokra Artisans",
            description: "Ancient bronze casting technique using lost-wax method, creating unique figurines and vessels",
            heritage: "4000+ Years Old",
            icon: "palette",
            status: "UNESCO Recognized"
        },
        {
            title: "Paitkar Scroll Painting",
            community: "Santhal Artists",
            description: "Traditional narrative art form depicting mythological stories on handmade paper scrolls",
            heritage: "1000+ Years Old", 
            icon: "book-open",
            status: "Living Heritage"
        },
        {
            title: "Tribal Folk Music",
            community: "Multiple Tribes",
            description: "Oral tradition of storytelling through music using traditional instruments like Madal and Flute",
            heritage: "Ancient Tradition",
            icon: "music",
            status: "Intangible Heritage"
        }
    ];

    const marketplaceItems = [
        {
            category: "Handicrafts",
            title: "Tribal Dokra Art",
            seller: "Rupa Devi, Khunti",
            price: "₹850 - ₹2,500",
            rating: 4.8,
            image: "🏺",
            description: "Traditional bronze casting art from tribal artisans",
            verified: true,
            icon: "shopping-bag"
        },
        {
            category: "Homestay",
            title: "Eco Forest Lodge",
            seller: "Netarhat Hills",
            price: "₹1,200/night",
            rating: 4.9,
            image: "🏠",
            description: "Sustainable accommodation in pristine forest setting",
            verified: true,
            icon: "home"
        },
        {
            category: "Experience",
            title: "Tribal Dance Workshop",
            seller: "Santhal Cultural Center",
            price: "₹500/person",
            rating: 4.7,
            image: "💃",
            description: "Learn traditional Santhal dance with local masters",
            verified: true,
            icon: "camera"
        },
        {
            category: "Food",
            title: "Authentic Tribal Cuisine",
            seller: "Village Kitchen, Dumka",
            price: "₹300/meal",
            rating: 4.6,
            image: "🍽️",
            description: "Farm-to-table experience with organic local ingredients",
            verified: true,
            icon: "utensils"
        },
        {
            category: "Handicrafts",
            title: "Bamboo Craft Items",
            seller: "Jharkhand Bamboo Mission",
            price: "₹150 - ₹800",
            rating: 4.5,
            image: "🎋",
            description: "Sustainable bamboo products made by local communities",
            verified: true,
            icon: "shopping-bag"
        },
        {
            category: "Guide Services",
            title: "Local Trek Guide",
            seller: "Manoj Kumar, Ranchi",
            price: "₹800/day",
            rating: 4.9,
            image: "🥾",
            description: "Certified guide for Netarhat and Patratu valley treks",
            verified: true,
            icon: "camera"
        }
    ];

    const sampleQueries = [
        "Plan a 3-day eco-tourism trip to Jharkhand",
        "Show me tribal villages near Ranchi",
        "Best waterfalls to visit in monsoon",
        "Cultural events in Deoghar this month"
    ];

    const chatMessages = [
        {
            type: 'bot',
            content: "Hi! I'm your AI tourism assistant for Jharkhand. I can help you plan personalized itineraries, find local guides, book accommodations, and discover hidden gems. What would you like to explore?",
            timestamp: "Just now"
        },
        {
            type: 'user', 
            content: "I want to experience authentic tribal culture. Can you suggest some places?",
            timestamp: "2 min ago"
        },
        {
            type: 'bot',
            content: "Perfect! For authentic tribal experiences, I recommend: 1) Saranda Forest - home to Ho and Munda tribes with traditional dance performances, 2) Dumka district - famous for Santhali culture and handicrafts, 3) Khunti - birthplace of Birsa Munda with museums and cultural centers. Would you like me to create a detailed itinerary?",
            timestamp: "1 min ago"
        }
    ];

    // State
    let isTyping = false;
    let messageValue = '';

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
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

    // Generate destinations
    function generateDestinations() {
        const container = document.getElementById('destinationsGrid');
        if (!container) return;

        container.innerHTML = destinations.map(destination => `
            <div class="destination-card">
                <div class="destination-header">
                    <div class="destination-emoji">${destination.image}</div>
                    <div class="rating-badge">
                        <i data-lucide="star" style="width: 12px; height: 12px; fill: currentColor;"></i>
                        ${destination.rating}
                    </div>
                </div>
                
                <h3 class="destination-title">
                    <i data-lucide="${destination.icon}" style="width: 20px; height: 20px;"></i>
                    ${destination.name}
                </h3>
                
                <div class="destination-type">${destination.type}</div>
                
                <p class="destination-description">${destination.description}</p>
                
                <div class="destination-highlights">
                    ${destination.highlights.map(highlight => `
                        <span class="highlight-badge">${highlight}</span>
                    `).join('')}
                </div>
                
                <button class="btn btn-outline btn-sm" style="width: 100%;">
                    Explore Details
                </button>
            </div>
        `).join('');

        // Re-initialize icons for new content
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Generate cultural events
    function generateCulturalEvents() {
        const container = document.getElementById('cultureEventsGrid');
        if (!container) return;

        container.innerHTML = culturalEvents.map(event => `
            <div class="culture-event-card">
                <div class="event-header">
                    <i data-lucide="${event.icon}" class="event-icon"></i>
                    <div class="event-type">${event.type}</div>
                </div>
                
                <h4 class="event-title">${event.title}</h4>
                
                <div class="event-details">
                    <div class="event-detail">
                        <i data-lucide="calendar" style="width: 12px; height: 12px;"></i>
                        ${event.date}
                    </div>
                    <div class="event-detail">
                        <i data-lucide="users" style="width: 12px; height: 12px;"></i>
                        ${event.tribe}
                    </div>
                    <div class="event-detail">
                        📍 ${event.location}
                    </div>
                    <div class="event-detail">
                        👥 ${event.participants} expected
                    </div>
                </div>
                
                <p class="event-description">${event.description}</p>
                
                <button class="btn btn-outline btn-sm" style="width: 100%;">
                    Learn More
                </button>
            </div>
        `).join('');

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Generate traditions
    function generateTraditions() {
        const container = document.getElementById('traditionsGrid');
        if (!container) return;

        container.innerHTML = tribalTraditions.map(tradition => `
            <div class="tradition-card">
                <div class="tradition-header">
                    <i data-lucide="${tradition.icon}" class="tradition-icon"></i>
                    <div class="tradition-status">${tradition.status}</div>
                </div>
                
                <h4 class="tradition-title">${tradition.title}</h4>
                
                <div class="event-details">
                    <div class="event-detail">🏘️ ${tradition.community}</div>
                    <div class="event-detail">⏳ ${tradition.heritage}</div>
                </div>
                
                <p class="event-description">${tradition.description}</p>
                
                <button class="btn btn-outline btn-sm" style="width: 100%;">
                    Explore Tradition
                </button>
            </div>
        `).join('');

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Generate marketplace
    function generateMarketplace() {
        const container = document.getElementById('marketplaceGrid');
        if (!container) return;

        container.innerHTML = marketplaceItems.map(item => `
            <div class="marketplace-card">
                <div class="marketplace-header">
                    <div class="marketplace-meta">
                        <div class="category-badge">${item.category}</div>
                        <div class="marketplace-rating">
                            <i data-lucide="star" style="width: 12px; height: 12px; fill: currentColor;"></i>
                            ${item.rating}
                        </div>
                    </div>
                    
                    <div class="marketplace-emoji">${item.image}</div>
                    
                    <h3 class="marketplace-title">
                        <i data-lucide="${item.icon}" style="width: 16px; height: 16px;"></i>
                        ${item.title}
                    </h3>
                </div>
                
                <div class="marketplace-content">
                    <p class="marketplace-description">${item.description}</p>
                    
                    <div class="marketplace-seller">
                        <span class="seller-name">by ${item.seller}</span>
                        ${item.verified ? '<div class="verified-badge">✓ Verified</div>' : ''}
                    </div>
                    
                    <div class="marketplace-footer">
                        <span class="marketplace-price">${item.price}</span>
                        <button class="btn btn-outline btn-sm">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Generate suggestions
    function generateSuggestions() {
        const container = document.getElementById('suggestionsList');
        if (!container) return;

        container.innerHTML = sampleQueries.map(query => `
            <button class="suggestion-item" onclick="setMessage('${query}')">${query}</button>
        `).join('');
    }

    // Generate chat messages
    function generateChatMessages() {
        const container = document.getElementById('chatMessages');
        if (!container) return;

        container.innerHTML = chatMessages.map(msg => `
            <div class="message ${msg.type}">
                <div class="message-avatar ${msg.type === 'bot' ? 'bot-avatar' : 'user-avatar'}">
                    <i data-lucide="${msg.type === 'bot' ? 'bot' : 'user'}" style="width: 16px; height: 16px;"></i>
                </div>
                
                <div class="message-content">
                    <div class="message-bubble ${msg.type === 'bot' ? 'bot-message' : 'user-message'}">
                        <p class="message-text">${msg.content}</p>
                    </div>
                    <p class="message-time">${msg.timestamp}</p>
                </div>
            </div>
        `).join('');

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Scroll to bottom
        container.scrollTop = container.scrollHeight;
    }

    // Chat functionality
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const chatMessages_container = document.getElementById('chatMessages');

    function setMessage(query) {
        if (messageInput) {
            messageInput.value = query;
            messageValue = query;
            updateSendButton();
        }
    }

    function updateSendButton() {
        if (sendButton && messageInput) {
            sendButton.disabled = !messageInput.value.trim();
        }
    }

    function sendMessage() {
        if (!messageInput || !messageInput.value.trim()) return;

        const message = messageInput.value.trim();
        
        // Add user message
        const userMessage = {
            type: 'user',
            content: message,
            timestamp: 'Just now'
        };
        
        chatMessages.push(userMessage);
        generateChatMessages();
        
        messageInput.value = '';
        updateSendButton();
        
        // Show typing indicator
        showTypingIndicator();
        
        // Simulate AI response
        setTimeout(() => {
            hideTypingIndicator();
            const botResponse = {
                type: 'bot',
                content: getAIResponse(message),
                timestamp: 'Just now'
            };
            chatMessages.push(botResponse);
            generateChatMessages();
        }, 2000);
    }

    function showTypingIndicator() {
        const container = document.getElementById('chatMessages');
        if (!container) return;

        const typingHTML = `
            <div class="typing-indicator">
                <div class="message-avatar bot-avatar">
                    <i data-lucide="bot" style="width: 16px; height: 16px;"></i>
                </div>
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        
        container.insertAdjacentHTML('beforeend', typingHTML);
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        container.scrollTop = container.scrollHeight;
    }

    function hideTypingIndicator() {
        const indicator = document.querySelector('.typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    function getAIResponse(message) {
        const responses = [
            "I'd be happy to help you plan your Jharkhand adventure! Let me suggest some amazing destinations based on your interests.",
            "Great question! Jharkhand has incredible hidden gems. I can recommend some authentic experiences that showcase the rich tribal culture.",
            "That sounds like an exciting trip! I can help you create a personalized itinerary that includes the best waterfalls, cultural sites, and local experiences.",
            "Perfect! I have some wonderful suggestions for cultural experiences, including tribal villages, traditional craft workshops, and local festivals.",
            
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Event listeners
    if (messageInput) {
        messageInput.addEventListener('input', updateSendButton);
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }

    // Make setMessage globally available
    window.setMessage = setMessage;

    // Header scroll effect
    let lastScrollY = 0;
    const header = document.querySelector('.header');

    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (header) {
            if (currentScrollY > 100) {
                header.style.background = 'hsl(var(--background) / 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'hsl(var(--background) / 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            }
        }
        
        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    // Initialize all sections
    generateDestinations();
    generateCulturalEvents();
    generateTraditions();
    generateMarketplace();
    generateSuggestions();
    generateChatMessages();

    // Initialize send button state
    updateSendButton();

    console.log('Jharkhand Tourism Platform initialized successfully!');
});