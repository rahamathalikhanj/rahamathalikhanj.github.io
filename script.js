/* -------------------------------------------------------------
   RAHAMATH ALIKHAN J - PORTFOLIO INTERACTIVITY SCRIPT
   ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCodeSandbox();
  initStatsCounter();
  initSkillsSearch();
  initProjectsFilter();
  initModals();
});

/* 1. Navbar Scroll & Active Highlights */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksContainer = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '0.6rem 0';
      navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
      navbar.style.padding = '1rem 0';
      navbar.style.boxShadow = 'none';
    }

    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (navLinksContainer.style.display === 'flex') {
        navLinksContainer.style.display = 'none';
      } else {
        navLinksContainer.style.display = 'flex';
        navLinksContainer.style.flexDirection = 'column';
        navLinksContainer.style.position = 'absolute';
        navLinksContainer.style.top = '100%';
        navLinksContainer.style.left = '0';
        navLinksContainer.style.right = '0';
        navLinksContainer.style.background = 'rgba(9, 13, 22, 0.95)';
        navLinksContainer.style.padding = '1.5rem';
        navLinksContainer.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      }
    });
  }
}

/* 2. Code Architecture Sandbox Toggle */
function initCodeSandbox() {
  const tabKotlin = document.getElementById('tabKotlin');
  const tabFlutter = document.getElementById('tabFlutter');
  const codeDisplay = document.getElementById('codeDisplay');

  const kotlinCode = `// Kotlin Clean Architecture & Flow State
@HiltViewModel
class RideViewModel @Inject constructor(
    private val getLiveRouteUseCase: GetLiveRouteUseCase
) : ViewModel() {

    val rideState = getLiveRouteUseCase()
        .map { route -> RideUiState.Success(route) }
        .catch { emit(RideUiState.Error(it.message)) }
        .stateIn(viewModelScope, SharingStarted.Lazily, RideUiState.Loading)
}`;

  const flutterCode = `// Flutter Clean Architecture & BLoC Pattern
class LiveRideBloc extends Bloc<RideEvent, RideState> {
  final WatchDriverLocationUseCase watchDriverLocation;

  LiveRideBloc(this.watchDriverLocation) : super(RideInitial()) {
    on<StartTripTracking>((event, emit) async {
      emit(RideLoading());
      await emit.forEach(
        watchDriverLocation(event.tripId),
        onData: (LatLng coord) => RideActive(driverCoord: coord),
        onError: (err, stack) => RideError(err.toString()),
      );
    });
  }
}`;

  if (tabKotlin && tabFlutter && codeDisplay) {
    tabKotlin.addEventListener('click', () => {
      tabKotlin.classList.add('active');
      tabFlutter.classList.remove('active', 'flutter-active');
      codeDisplay.querySelector('code').textContent = kotlinCode;
      codeDisplay.style.color = '#A7F3D0';
    });

    tabFlutter.addEventListener('click', () => {
      tabFlutter.classList.add('active', 'flutter-active');
      tabKotlin.classList.remove('active');
      codeDisplay.querySelector('code').textContent = flutterCode;
      codeDisplay.style.color = '#7DD3FC';
    });
  }
}

/* 3. Number Counter Animation */
function initStatsCounter() {
  const stats = document.querySelectorAll('.stat-number');
  let animated = false;

  const runCounter = () => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    const heroTop = heroSection.getBoundingClientRect().top;
    
    if (heroTop < window.innerHeight && !animated) {
      animated = true;
      stats.forEach(stat => {
        const targetStr = stat.getAttribute('data-target');
        const target = parseFloat(targetStr);
        let count = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            stat.textContent = targetStr + '+';
            clearInterval(timer);
          } else {
            stat.textContent = (targetStr.includes('.') ? count.toFixed(1) : Math.floor(count)) + '+';
          }
        }, 50);
      });
    }
  };

  window.addEventListener('scroll', runCounter);
  runCounter();
}

/* 4. Skills Real-Time Search Filter */
function initSkillsSearch() {
  const input = document.getElementById('skillSearchInput');
  const categoryCards = document.querySelectorAll('.skill-category-card');

  if (!input) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    categoryCards.forEach(card => {
      const categoryTitle = card.querySelector('.category-title').textContent.toLowerCase();
      const tags = Array.from(card.querySelectorAll('.skill-tag')).map(t => t.textContent.toLowerCase());

      const matches = categoryTitle.includes(query) || tags.some(t => t.includes(query));
      if (matches || query === '') {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.3s ease';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

/* 5. Projects Category Filter */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        if (filter === 'all' || (categories && categories.includes(filter))) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* 6. Modals Handler (Resume & Case Study) */
function initModals() {
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtn = document.getElementById('openResumeBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');
  const closeResumeBtn = document.getElementById('closeResumeBtn');

  const projectModal = document.getElementById('projectModal');
  const closeProjectBtn = document.getElementById('closeProjectBtn');
  const projectModalContent = document.getElementById('projectModalContent');

  const openModal = (modal) => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (modal) => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  if (openResumeBtn) openResumeBtn.addEventListener('click', () => openModal(resumeModal));
  if (heroResumeBtn) heroResumeBtn.addEventListener('click', () => openModal(resumeModal));
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', () => closeModal(resumeModal));

  if (closeProjectBtn) closeProjectBtn.addEventListener('click', () => closeModal(projectModal));

  window.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeModal(resumeModal);
    if (e.target === projectModal) closeModal(projectModal);
  });

  // Project Details Data mapping
  const projectDetails = {
    vimo: {
      title: 'Public Booking – Vimo Services',
      client: 'Singapore Limousine & Wheelchair Transport Services',
      type: 'Native Android Application (Kotlin)',
      img: 'assets/vimo-app.png',
      summary: 'Premium chauffeur and limousine booking platform for corporate transportation, airport transfers, wedding charters, wheelchair-accessible transport, and special event bookings.',
      features: [
        'End-to-end native Android app built using Kotlin, Jetpack Compose, Hilt, and MVVM architecture.',
        'Integration of HERE Maps for precise navigation, geofencing, and location-based pricing.',
        'Customer engagement features including rating, driver tip, referral codes, and in-app feedback.',
        'Stripe payment gateway integration with PCI DSS compliant card saving & Google Pay.',
        'Firebase FCM real-time ride notifications and Crashlytics stability tracking.'
      ]
    },
    ajman: {
      title: 'Ajman Taxi, Sixth Limo & Fytch',
      client: 'Dubai Technologies, UAE',
      type: 'Flutter Cross-Platform Mobility Platform',
      img: 'assets/ajman-taxi-app.png',
      summary: 'Comprehensive taxi-booking platform for on-demand and scheduled rides in Dubai and UAE, catering to corporate and individual customers.',
      features: [
        'Built with Flutter, BLoC, and Riverpod state management for high performance across iOS and Android.',
        'Google Maps SDK & HERE Maps integration for live driver tracking, ETA calculation, and route optimization.',
        'Instant ride dispatching, scheduled bookings, rebooking, and detailed trip history workflows.',
        'Stripe, PayPal, and Google Pay payment gateway implementations.',
        'Configured automated GitLab CI/CD release pipelines for seamless Google Play Store distribution.'
      ]
    },
    roadaider: {
      title: 'Road Assistant (Roadaider)',
      client: 'Roadaider On-Demand Platform',
      type: 'Native Android (Java)',
      img: 'assets/roadaider-app.png',
      summary: 'On-demand roadside assistance mobile app enabling users to request emergency towing, battery jump-starts, fuel delivery, and flat tire service.',
      features: [
        'Native Android developed in Java with robust background service tracking.',
        'Real-time GPS tracking of assigned service vehicle en route to user location.',
        'Stripe payment integration for upfront transparent pricing.',
        'Firebase Push Notifications for status updates (Dispatched, Arrived, Completed).'
      ]
    },
    fts: {
      title: 'Fleet Transport Service (FTS Pro & EHS)',
      client: 'Enterprise Mobility Client',
      type: 'Flutter Enterprise Offline-First App',
      img: 'assets/fts-fleet-app.png',
      summary: 'Enterprise fleet transport management solution featuring multi-level vehicle approval matrices, maintenance tracking, and an offline-first driver app.',
      features: [
        'Offline-first driver app utilizing Isar local DB for offline data persistence in poor signal zones.',
        'Multi-level approval hierarchy for vehicle dispatch and trip sign-offs.',
        'Real-time vehicle telemetry, maintenance tracking, and fuel consumption logging.'
      ]
    },
    woye: {
      title: 'Public Booking (Woye Transport)',
      client: 'Woye Transport, Ethiopia',
      type: 'Native Android (Java & Jetpack Compose)',
      img: 'assets/ajman-taxi-app.png',
      summary: 'On-demand ride-hailing app with real-time driver tracking and secure payments tailored for transport infrastructure in Ethiopia.',
      features: [
        'Native Java code coupled with Jetpack Compose for modern UI components.',
        'MVVM architecture & Hilt DI for modular testability.',
        'Real-time driver location stream via WebSocket and Firebase.'
      ]
    },
    railway: {
      title: 'Digitization of Signal & Telecom Railway',
      client: 'Southern Railway, India',
      type: 'Native Android GIS App',
      img: 'assets/fts-fleet-app.png',
      summary: 'Enterprise mobile app for digitizing railway signal infrastructure, telecom cabling, and station assets using map-based GIS visual asset tracking.',
      features: [
        'GIS map asset visualization of railway signals, relay rooms, and track switches.',
        'Offline survey mode for field engineers with SQLite local sync.',
        'High accuracy GPS location tag for railway asset logging.'
      ]
    }
  };

  // Attach event listeners to project "Case Study" buttons
  document.querySelectorAll('.view-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-project');
      const data = projectDetails[key];

      if (data && projectModalContent) {
        projectModalContent.innerHTML = `
          <div style="margin-bottom:1.5rem;">
            <span style="font-size:0.75rem; color:var(--android-green); font-weight:700; text-transform:uppercase; letter-spacing:0.05em;">${data.client}</span>
            <h2 style="font-size:1.8rem; margin:0.25rem 0 0.5rem;">${data.title}</h2>
            <span style="display:inline-block; font-size:0.82rem; background:rgba(1,181,246,0.1); color:var(--flutter-cyan); padding:0.2rem 0.6rem; border-radius:4px; font-weight:600;">${data.type}</span>
          </div>

          <div style="width:100%; height:260px; border-radius:12px; overflow:hidden; margin-bottom:1.5rem; border:1px solid var(--border-color);">
            <img src="${data.img}" alt="${data.title}" style="width:100%; height:100%; object-fit:cover;">
          </div>

          <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.6; margin-bottom:1.5rem;">
            ${data.summary}
          </p>

          <h3 style="color:#FFF; font-size:1.1rem; margin-bottom:0.75rem;"><i class="fa-solid fa-list-check" style="color:var(--android-green);"></i> Key Architectural Accomplishments</h3>
          <ul style="padding-left:1.25rem; color:var(--text-muted); font-size:0.9rem; line-height:1.7; margin-bottom:1.5rem;">
            ${data.features.map(f => `<li>${f}</li>`).join('')}
          </ul>

          <div style="display:flex; justify-content:flex-end;">
            <button class="btn btn-secondary btn-sm" id="closeDetailBtn">Close</button>
          </div>
        `;

        openModal(projectModal);

        const closeDetailBtn = document.getElementById('closeDetailBtn');
        if (closeDetailBtn) {
          closeDetailBtn.addEventListener('click', () => closeModal(projectModal));
        }
      }
    });
  });
}
