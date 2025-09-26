import React from 'react';
// import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h2>Bienvenue dans le Wiki Silksong</h2>
        <div className="hero-content">
          <div className="game-info">
            <h3>🎭 Silksong - La Suite de Hollow Knight</h3>
            <p>
              Incarnez Hornet, princesse-protectrice de Hallownest, dans une aventure 
              épique à travers le royaume de Pharloom. Découvrez de nouveaux pouvoirs, 
              affrontez des boss redoutables et percez les mystères de la soie.
            </p>
            
            <div className="features">
              <div className="feature-card">
                <h4>🕷️ Nouvelle Héroïne</h4>
                <p>Jouez comme Hornet avec son style de combat unique</p>
              </div>
              <div className="feature-card">
                <h4>🏰 Nouveau Royaume</h4>
                <p>Explorez Pharloom, terre de soie et de corail</p>
              </div>
              <div className="feature-card">
                <h4>⚔️ Nouveaux Bosses</h4>
                <p>Affrontez des gardiens mystérieux et puissants</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;