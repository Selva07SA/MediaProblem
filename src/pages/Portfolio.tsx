import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Portfolio.css';

// These video URLs are served from public/assets/video.
// Vite copies public/ into dist/ during build, so the runtime path is /assets/video/...
const portfolioVideos = [
  {
    id: 1,
    title: 'SaaS Explainer Video - After Effects',
    videoUrl: ' /assets/video/edite 2.mp4',
    description: 'A fresh SaaS explainer created in After Effects with premium motion design.',
  },
  {
    id: 2,
    title: 'Commercial SaaS Explainer for InterviewAxis',
    videoUrl: '/assets/video/video 2 NWM.mp4',
    description: 'Clean brand animation and fast pacing for a commercial SaaS launch.',
  },
  {
    id: 3,
    title: 'Apply Style SaaS Explainer',
    videoUrl: '/assets/video/video 3 NWM.mp4',
    description: 'Stylized SaaS explainer inspired by MasterClass visuals and polished motion.',
  },
  {
    id: 4,
    title: 'Loki Product Launch Video',
    videoUrl: '/assets/video/video 4 NWM.mp4',
    description: 'A launch-focused edit for Loki with cinematic motion and brand energy.',
  },
  {
    id: 5,
    title: 'Follow & Comment SaaS Project',
    videoUrl: '/assets/video/video 5 NWM.mp4',
    description: 'A social-first SaaS promo built to drive engagement and DM reach.',
  },
  {
    id: 6,
    title: 'Linear SaaS Explainer',
    videoUrl: '/assets/video/video 6 NVM.mp4',
    description: 'A sleek linear explainer with a clean visual narrative.',
  },
  {
    id: 7,
    title: 'Motion SaaS Explainer',
    videoUrl: '/assets/video/video 7 NVM.mp4',
    description: 'High-energy SaaS animation showcasing product flow and motion.',
  },
  {
    id: 8,
    title: 'Vertical SaaS Video',
    videoUrl: '/assets/video/video 8 NVM.mp4',
    description: 'A vertical-format SaaS promo created for a happy client with zero revisions.',
  },
  {
    id: 9,
    title: 'POV Visuals SaaS Explainer',
    videoUrl: '/assets/video/video 9 NVM.mp4',
    description: 'A concept edit with a POV approach and polished UI motion.',
  },
  {
    id: 10,
    title: 'AI Product Animation Practice',
    videoUrl: '/assets/video/video 10 NVM.mp4',
    description: 'Practice animation for an imaginary AI company with refined product motion.',
  },
  {
    id: 11,
    title: 'Quill Meetings Launch Video',
    videoUrl: '/assets/video/video 11 NVM.mp4',
    description: 'A launch video for an AI SaaS product with strong branding visuals.',
  },
  {
    id: 12,
    title: 'HeyMyra.ai SaaS Explainer',
    videoUrl: '/assets/video/video1 NWM.mp4',
    description: 'A client-focused SaaS explainer showing polished storytelling and motion.',
  },
  {
    id: 13,
    title: 'Client Preview — Session A',
    videoUrl: '/assets/video/video 13.mp4',
    description: 'An early-stage client preview showcasing the initial cut and visual direction.',
  },
  {
    id: 14,
    title: 'Client Preview — Session B',
    videoUrl: '/assets/video/video 14.mp4',
    description: 'A follow-up preview from the same production session with revised pacing.',
  },
  {
    id: 15,
    title: 'Client Preview — Session C',
    videoUrl: '/assets/video/video 15.mp4',
    description: 'A polished preview clip exported directly from the project workflow.',
  },
  
];

type PortfolioVideo = (typeof portfolioVideos)[number];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioVideo | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="portfolio" id="portfolio">
      <motion.section
        className="portfolio-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Video Portfolio</h1>
            <p>Watch our latest creative video projects with instant preview and full-screen playback.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="portfolio-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="portfolio-intro">
            <p>Hover over any video to preview it and click to open the full portfolio showcase.</p>
          </div>
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {portfolioVideos.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24, duration: 0.4 }}
                >
                  <div className="project-image">
                    <video
                      className="project-preview"
                      src={project.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="project-overlay">
                      <button className="play-btn" aria-label={`Play ${project.title}`} />
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close video"
              >
                ✕
              </button>
              <div className="video-container">
                <video
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  controls
                  autoPlay
                  playsInline
                />
              </div>
              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        className="portfolio-stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: 'Projects Completed', value: '500+' },
              { label: 'Happy Clients', value: '250+' },
              { label: 'Years Experience', value: '10+' },
              { label: 'Awards Won', value: '45' },
            ].map((stat, idx) => (
              <motion.div key={idx} className="stat-item" variants={itemVariants}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
