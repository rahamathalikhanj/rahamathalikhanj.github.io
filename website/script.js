/**
 * Wee Info Tech (weeinfo.in) - Enterprise Platform Interactive Logic
 * Inspired by Uplogic Technologies (uplogictech.com)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header with Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Drawer
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawer = document.getElementById('closeDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
    });
  }

  if (closeDrawer && mobileDrawer) {
    closeDrawer.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('active');
    });
  });

  // 3. Category Filter Tabs for Turnkey Products
  const filterPills = document.querySelectorAll('.filter-pill');
  const productCards = document.querySelectorAll('.product-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 4. Detailed Technical Data for All Products in Downloads
  const productData = {
    motosaas: {
      title: "MotoSaaS™ – Two-Wheeler Dealership & 3D Showroom Platform",
      badge: "Automotive Enterprise SaaS",
      client: "Alagendra Automobiles & Multi-Branch Dealerships",
      image: "assets/wee_info_automotive.png",
      tagline: "End-to-End Dealership Cloud ERP, Interactive 3D GLB Showroom, Sales CRM & Workshop Job Cards",
      overview: "MotoSaaS is a commercially proven, manufacturer-independent, multi-tenant automotive dealership management platform. It combines customer-facing 3D vehicle visualization with branch CRM pipelines, dynamic on-road quotation engines, digital workshop job cards, technician allocation, and cashier billing under zero-cost Azure hosting.",
      highlights: [
        "Interactive 3D Showroom visualizer (GLB with Draco compression, 360° turntables, camera orbital constraints).",
        "Dynamic On-Road Quotation Engine calculating state RTO tariffs, insurance floor rates, and finance EMI options.",
        "Sales CRM Pipeline with lead auto-assignment, stage gates, and test-ride license verification.",
        "Workshop Management (`JC-...` digital job cards, spare-parts allocation, technician checklists, customer estimate approvals).",
        "Multi-Branch Command Center (Branch Portal, Org Admin Portal, SaaS Super Admin Operations Portal)."
      ],
      techStack: ["Next.js 14", "ASP.NET Core 8", "PostgreSQL", "Flutter Mobile", "EF Core", "Azure Container Apps", "Three.js"],
      deliverables: ["Customer Mobile App (iOS/Android)", "Staff Dealer App", "Branch Web Portal", "Super Admin Platform"]
    },
    connectai: {
      title: "ConnectAI™ – WhatsApp Conversational Commerce Suite",
      badge: "Conversational AI & Meta API",
      client: "Turnkey WhatsApp Commerce & Support Platform",
      image: "assets/avatar.png",
      tagline: "Meta Cloud API v21.0 Engine, Visual React Flow Canvas, pgvector RAG AI Agents & In-Chat UPI Checkout",
      overview: "ConnectAI is an enterprise WhatsApp automation platform engineered with Next.js 15, Tailwind, and Prisma ORM. It enables brands to deploy autonomous AI agents trained on proprietary knowledge bases, visually design complex conversational trees, manage high-volume customer chats with a 3-pane team inbox, and execute in-chat Razorpay/UPI checkouts.",
      highlights: [
        "Visual Automation Builder powered by `@xyflow/react` with 8 custom node types (keyword triggers, conditions, AI agents).",
        "pgvector Semantic Vector Store with document chunking and Gemini/OpenAI embeddings for contextual RAG grounding.",
        "Multi-Agent Team Inbox with real-time status transitions, internal agent private notes, and chat routing.",
        "Broadcast & Drip Sequence Manager with Meta approved template catalog and real-time delivery tracking.",
        "Turnkey eCommerce Engine: In-chat Razorpay UPI payment links, abandoned cart recovery, and Shopify sync."
      ],
      techStack: ["Next.js 15", "Meta Cloud API", "Prisma ORM", "pgvector", "PostgreSQL", "React Flow", "Razorpay"],
      deliverables: ["Visual Canvas Builder", "Team Inbox Dashboard", "AI Agent Studio", "Meta Webhook Ingestion Engine"]
    },
    turfmate: {
      title: "TurfMate™ – Sports Arena & Turf Booking Platform",
      badge: "Sports & Venue SaaS",
      client: "Wee Info Tech Turf Network",
      image: "assets/turfmate_product_logo.png",
      tagline: "Real-Time Slot Reservation, Dynamic Hourly Pricing, Partner Admin Portal & QR Code Check-In",
      overview: "TurfMate is an on-demand sports venue booking ecosystem uniting a high-performance customer mobile app with a comprehensive turf owner portal. Designed to solve double-booking and payment leaks, it handles dynamic hourly peak/off-peak pricing, split UPI advance deposits, automated WhatsApp receipts, and contactless QR code gate check-in.",
      highlights: [
        "Real-Time Slot Engine with concurrency locking preventing simultaneous booking conflicts.",
        "Dynamic Pricing Engine allowing turf owners to set weekday/weekend, day/night floodlight rates.",
        "Turf Partner Management Portal (slot calendars, maintenance blocking, offline walk-in cash logging, earnings reports).",
        "Integrated UPI/Razorpay advance deposit gateway with automated refund policies for cancellations.",
        "Instant WhatsApp and SMS booking confirmation with map directions and entry QR ticket."
      ],
      techStack: ["Flutter Mobile", "Node.js / Express", "MongoDB / PostgreSQL", "Razorpay UPI", "Tailwind CSS"],
      deliverables: ["Customer Booking Mobile App", "Partner Turf Dashboard", "Slot Engine API", "QR Validator App"]
    },
    urbanassure: {
      title: "UrbanAssure™ – Doorstep Services & Emergency Field Dispatch",
      badge: "On-Demand Field Services",
      client: "UrbanAssure Home & Roadside Network",
      image: "assets/urbanassure_app_logo.png",
      tagline: "Two-Sided Trades Marketplace, Electricians/Plumbers, Roadside Breakdown & Live GPS Tracking",
      overview: "UrbanAssure is a robust on-demand field service platform catering to verified doorstep home maintenance (electricians, plumbers, appliance technicians) and 24/7 emergency roadside assistance (towing, jump-start, flat tire). Features background geolocation tracking, supervisor quality approvals, escrow payments, and automated technician dispatch.",
      highlights: [
        "Intelligent Dispatch Algorithm matching requests to nearest verified technicians using Fused Location algorithms.",
        "Two-Sided App Ecosystem: Customer booking client with upfront rate cards + Partner/Technician task acceptance app.",
        "Foreground Service Live GPS Tracking with turn-by-turn routing and real-time customer ETA updates.",
        "Secure In-App Escrow Checkout holding payments until customer digital signature and job sign-off.",
        "Comprehensive Admin & Dispute Command Center with review moderation and technician payout audits."
      ],
      techStack: ["Flutter iOS/Android", "NestJS Backend", "Prisma ORM", "PostgreSQL", "Google Maps SDK", "Stripe / Razorpay"],
      deliverables: ["Customer Service App", "Technician Companion App", "Admin Dispatch Console", "NestJS REST API"]
    },
    ominaigo: {
      title: "OminaiGo™ / DT Transit – Taxi & Fleet Telemetry Suite",
      badge: "Transportation & Telemetry",
      client: "Dubai Technologies UAE & On-Demand Fleets",
      image: "assets/ajman-taxi-app.png",
      tagline: "High-Concurrency Ride Hailing, Dynamic Surge Tariffs, HERE Maps SDK & Telemetry Dispatch",
      overview: "OminaiGo is an enterprise-grade ride-hailing and fleet management platform engineered for municipal transit authorities and corporate limousine fleets. Built to sustain tens of thousands of simultaneous trips with real-time WebSocket telemetry, dynamic geofenced surge calculations, wheelchair-accessible vehicle options, and automated driver payout settlements.",
      highlights: [
        "Bidirectional WebSocket Telemetry with sub-second vehicle coordinate streaming and route snapping.",
        "HERE Maps & Google Maps SDK integration for commercial vehicle routing and toll avoidance.",
        "Offline-First Driver Companion App utilizing Isar embedded database for intermittent connectivity in desert/rural transit.",
        "Multi-Tier Supervisory Vehicle Sign-offs, fuel consumption logs, and digital safety checklists.",
        "Enterprise Dispatch Dashboard with heatmaps, driver shifts, and Stripe/Card on-file payment processing."
      ],
      techStack: ["Kotlin Native", "Flutter", ".NET Core Worker Services", "PostgreSQL", "WebSockets", "HERE Maps API"],
      deliverables: ["Passenger Mobile App", "Driver Companion App", "Dispatcher Web Console", "Background Telemetry Worker"]
    },
    electconnect: {
      title: "ElectConnect™ – Election Digital Platform & Voter Analytics",
      badge: "Civic Tech & Analytics",
      client: "Campaign Operations & Political Consultancies",
      image: "assets/election_digital_platform.png",
      tagline: "Assembly Constituency GIS Mapping, Booth-Level Voter Segmentation & WhatsApp Campaign Engine",
      overview: "ElectConnect is a specialized civic technology platform built for political campaigns and public governance. It digitizes voter rolls, maps assembly constituencies at the polling-booth level, tracks field surveyor GPS movements, and broadcasts hyper-targeted WhatsApp messaging campaigns to boost voter turnout.",
      highlights: [
        "Constituency & Polling Booth GIS Mapping with visual heatmaps of voter density and historical swing patterns.",
        "Field Cadre & Surveyor Tracking with offline survey data capture and tamper-proof GPS timestamps.",
        "Voter Segmentation Engine (demographics, family grouping, welfare scheme eligibility, sentiment rating).",
        "Integrated WhatsApp Broadcast Dispatcher delivering personalized regional language video and audio messages.",
        "Live Election Day Command Center tracking booth turnout in real time with automated alert triggers."
      ],
      techStack: ["Next.js 14", "Flutter Mobile", "Python FastAPI", "PostgreSQL / PostGIS", "Chart.js", "Docker"],
      deliverables: ["Cadre Mobile Survey App", "Constituency Analytics Portal", "WhatsApp Broadcaster", "Turnout Dashboard"]
    },
    freshgo: {
      title: "FreshGo™ / RetailSync – Hyperlocal Multi-Store E-Commerce",
      badge: "Quick-Commerce & Retail",
      client: "Hyperlocal Supermarkets & Retail Aggregators",
      image: "assets/employee_delivery_management.jpeg",
      tagline: "Multi-Store Online Ordering, Real-Time Inventory Sync, Automated Rider Dispatch & POS Integration",
      overview: "FreshGo is a quick-commerce and multi-vendor retail platform designed for modern grocery chains and specialty retailers. Unites customer mobile shopping with real-time store inventory sync, automated rider delivery routing, and a multi-branch cashier POS system.",
      highlights: [
        "Multi-Store Grocery & Retail Catalog with barcode scanning and instant price/stock synchronization.",
        "Automated Rider Dispatch calculating delivery zones, vehicle capacity, and multi-drop route optimization.",
        "Merchant Store Manager Portal with inventory low-stock alerts, sales analytics, and order packing queues.",
        "Customer Mobile App featuring scheduled deliveries, live rider GPS tracking, and digital wallet checkout.",
        "Dedicated Delivery Partner App with proof-of-delivery photo capture and customer digital OTP sign-off."
      ],
      techStack: ["React Native / Flutter", "Node.js", "MongoDB", "Redis", "Razorpay / Stripe", "Firebase"],
      deliverables: ["Customer Shopping App", "Store Merchant Portal", "Rider Delivery App", "Central Operations Hub"]
    },
    erpcrm: {
      title: "Enterprise ERP & Operations Management Suite",
      badge: "Enterprise Business Platform",
      client: "Manufacturing, Field Operations & Corporate Enterprises",
      image: "assets/admin_portal.jpeg",
      tagline: "Multi-Tenant RBAC, Automated Invoicing, Warehouse Inventory & Mobile Staff Synchronization",
      overview: "A comprehensive business operations platform engineered for multi-tier enterprises. Features granular Role-Based Access Control (RBAC), multi-stage approval hierarchies, warehouse stock transfers, automated GST/VAT invoicing, and synchronized field staff companion apps.",
      highlights: [
        "Multi-Tenant Role-Based Access Control (RBAC) with audit trail logging for all administrative actions.",
        "Automated Milestone Invoicing, recurring billing, PDF generation, and payment gateway webhooks.",
        "Inventory & Asset Tracking across multiple warehouses with batch numbering and barcode verification.",
        "Field Staff Mobile App allowing remote approvals, timesheet submissions, and equipment issue logging.",
        "Executive BI Analytics with interactive Chart.js widgets, cash-flow projections, and compliance reports."
      ],
      techStack: ["Next.js 15", "TypeScript", "ASP.NET Core / Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
      deliverables: ["Web Executive Portal", "Staff Companion App", "Accounting & Billing Engine", "BI Dashboard"]
    },
    edgeai: {
      title: "Edge AI & Industrial Computer Vision Suite",
      badge: "Applied AI & Edge Computing",
      client: "Industrial Quality Control & Edge Intelligence",
      image: "assets/avatar.png",
      tagline: "On-Device Gemini Nano Inference, Real-Time YOLO ONNX Detection & Dify Enterprise RAG",
      overview: "Wee Info Tech's applied AI suite brings cutting-edge artificial intelligence to production environments. Integrates on-device edge computing using Gemini Nano for offline privacy-first text analysis, YOLO ONNX models for real-time video defect inspection, and Dify workflows for conversational enterprise knowledge grounding.",
      highlights: [
        "On-Device Edge AI running Google Gemini Nano on Android devices for offline low-latency summaries.",
        "Real-Time Object Detection using YOLO ONNX pipelines for industrial component defect inspection.",
        "Dify Knowledge Retrieval Workflows connecting vector databases to enterprise ERP and document archives.",
        "High-performance inference with GPU acceleration and negligible memory overhead on edge devices.",
        "Automated alerting via WebSockets and WhatsApp when quality inspection thresholds are breached."
      ],
      techStack: ["Python", "YOLO ONNX", "Gemini Nano SDK", "Dify AI", "FastAPI", "Docker", "OpenCV"],
      deliverables: ["Edge Vision Pipeline", "Android Gemini Nano App", "Dify RAG Workflow Engine", "Inspection Console"]
    },
    emailworkers: {
      title: "High-Throughput Microservice Worker Pipeline",
      badge: "Cloud Microservices",
      client: "Enterprise Messaging & Notification Architecture",
      image: "assets/fts-fleet-app.png",
      tagline: "Containerized .NET Core 8 Workers, Resilient Message Queues & High-Volume Transactional Pipelines",
      overview: "Engineered from `EmailSendWorkerService` and `EmailReceiveWorkerService`, this battle-tested cloud microservice architecture processes millions of transactional emails and webhook notifications per day. Features resilient exponential retries, dead-letter queues, automated Forgejo/Docker CI/CD, and zero-downtime rolling updates.",
      highlights: [
        "Scalable .NET Core 8 Background Services running inside optimized lightweight Docker alpine containers.",
        "Asynchronous Message Processing handling IMAP inbox ingestion, attachment parsing, and SMTP dispatch.",
        "Resilient Fault Tolerance with Polly retry policies, circuit breakers, and dead-letter queue recovery.",
        "Automated CI/CD Workflows deploying to cloud infrastructure via Docker and GitHub Actions / Forgejo.",
        "Real-time telemetry and Prometheus metrics monitoring queue latency and delivery success rates."
      ],
      techStack: [".NET Core 8", "C#", "Docker", "PostgreSQL", "RabbitMQ / Redis", "Polly", "CI/CD"],
      deliverables: ["Containerized Worker Images", "Docker Compose Config", "Monitoring Telemetry", "CI/CD Pipeline"]
    }
  };

  // 5. Product Modal Handler
  const modalOverlay = document.getElementById('projectModal');
  const modalContainer = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('closeModalBtn');

  function openProductModal(key) {
    const item = productData[key];
    if (!item) return;

    let highlightsHtml = item.highlights.map(h => `<li><i class="fa-solid fa-check-circle" style="color:var(--brand-cyan); margin-right:0.5rem;"></i>${h}</li>`).join('');
    let techHtml = item.techStack.map(t => `<span class="tech-tag" style="background:rgba(12,195,228,0.1); border:1px solid rgba(12,195,228,0.3); color:var(--brand-cyan);">${t}</span>`).join('');
    let deliverableHtml = item.deliverables.map(d => `<span class="pill-badge" style="font-size:0.75rem; padding:0.25rem 0.65rem;">${d}</span>`).join('');

    modalContainer.innerHTML = `
      <div style="margin-bottom:1.5rem;">
        <span class="pill-badge pulse" style="margin-bottom:0.75rem;">${item.badge}</span>
        <h2 style="font-size:1.85rem; margin-bottom:0.4rem; color:#FFF;">${item.title}</h2>
        <p style="color:var(--brand-cyan); font-weight:600; font-size:0.95rem;">${item.tagline}</p>
        <span style="font-size:0.8rem; color:var(--text-dim);">${item.client}</span>
      </div>

      <div style="border-radius:12px; overflow:hidden; margin-bottom:1.5rem; max-height:280px; background:#000;">
        <img src="${item.image}" alt="${item.title}" style="width:100%; height:260px; object-fit:cover;" onerror="this.src='assets/wee_infotech_logo.png'">
      </div>

      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:1.1rem; color:#FFF; margin-bottom:0.5rem;"><i class="fa-solid fa-layer-group" style="color:var(--brand-cyan);"></i> Architectural Overview</h4>
        <p style="color:var(--text-muted); font-size:0.93rem; line-height:1.7;">${item.overview}</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:1.1rem; color:#FFF; margin-bottom:0.75rem;"><i class="fa-solid fa-cube" style="color:var(--brand-cyan);"></i> Key Production Capabilities</h4>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:0.5rem; font-size:0.9rem; color:#CBD5E1;">
          ${highlightsHtml}
        </ul>
      </div>

      <div style="margin-bottom:1.5rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.08);">
        <h4 style="font-size:0.9rem; color:var(--text-dim); text-transform:uppercase; margin-bottom:0.5rem;">Deliverables Included</h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
          ${deliverableHtml}
        </div>
        <h4 style="font-size:0.9rem; color:var(--text-dim); text-transform:uppercase; margin-bottom:0.5rem;">Core Technology Stack</h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
          ${techHtml}
        </div>
      </div>

      <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1rem; padding-top:1.5rem; border-top:1px solid rgba(255,255,255,0.08);">
        <a href="https://wa.me/919003610835?text=Hello%20WeeInfo,%20I%20am%20interested%20in%20a%20live%20demo%20and%20pricing%20for%20${encodeURIComponent(item.title)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
          <i class="fa-brands fa-whatsapp"></i> Request Live Demo &amp; Pricing
        </a>
        <a href="#contact" class="btn btn-primary btn-sm" onclick="document.getElementById('projectModal').classList.remove('active');">
          <i class="fa-solid fa-paper-plane"></i> Request Technical RFP
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
  }

  // Bind clicks to Quick View buttons
  document.querySelectorAll('.view-product-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pKey = btn.getAttribute('data-product');
      openProductModal(pKey);
    });
  });

  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // 6. Interactive Project Discovery & Cost Estimator
  const estPlatformBtns = document.querySelectorAll('[data-est-type]');
  const estScopeBtns = document.querySelectorAll('[data-est-scope]');
  
  let selectedPlatform = 'WhatsApp Automation (ConnectAI)';
  let platformBaseDays = 14;
  let platformBasePrice = 65000;

  let selectedScope = 'Turnkey Fast-Track';
  let scopeMultiplier = 1.0;
  let scopeDaysAdd = 0;

  function updateEstimator() {
    const totalDays = Math.round((platformBaseDays + scopeDaysAdd) * (scopeMultiplier > 1 ? 1.4 : 1));
    const totalPriceINR = Math.round(platformBasePrice * scopeMultiplier);
    const totalPriceUSD = Math.round(totalPriceINR / 85);

    document.getElementById('estSelectedPlatform').textContent = selectedPlatform;
    document.getElementById('estSelectedScope').textContent = selectedScope;
    document.getElementById('estDeliveryTimeline').textContent = `${totalDays} – ${totalDays + 7} Business Days`;
    document.getElementById('estTotalPrice').textContent = `₹${totalPriceINR.toLocaleString('en-IN')} / ~$${totalPriceUSD.toLocaleString('en-US')}`;

    const quoteBtn = document.getElementById('estQuoteBtn');
    if (quoteBtn) {
      const msg = `Hi WeeInfo! I would like to get a quote for: ${selectedPlatform} (${selectedScope}). Est Delivery: ${totalDays} days.`;
      quoteBtn.href = `https://wa.me/919003610835?text=${encodeURIComponent(msg)}`;
    }
  }

  estPlatformBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      estPlatformBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedPlatform = btn.getAttribute('data-est-name');
      platformBaseDays = parseInt(btn.getAttribute('data-days'), 10) || 14;
      platformBasePrice = parseInt(btn.getAttribute('data-price'), 10) || 65000;
      updateEstimator();
    });
  });

  estScopeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      estScopeBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedScope = btn.getAttribute('data-est-scope-name');
      scopeMultiplier = parseFloat(btn.getAttribute('data-mult')) || 1.0;
      scopeDaysAdd = parseInt(btn.getAttribute('data-scope-days'), 10) || 0;
      updateEstimator();
    });
  });

  // Initial estimator run
  updateEstimator();

  // 7. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(f => f.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 8. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cName').value;
      const email = document.getElementById('cEmail').value;
      const phone = document.getElementById('cPhone').value;
      const project = document.getElementById('cProduct').value;
      const message = document.getElementById('cMessage').value;

      const whatsappText = `Hi WeeInfo Team, my name is ${name} (${email}, ${phone}). I am interested in: ${project}. Message: ${message}`;
      const url = `https://wa.me/919003610835?text=${encodeURIComponent(whatsappText)}`;
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Redirecting to WhatsApp...';
      submitBtn.style.background = '#25D366';

      setTimeout(() => {
        window.open(url, '_blank');
        contactForm.reset();
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Project Discovery Request';
        submitBtn.style.background = '';
      }, 1000);
    });
  }
});

