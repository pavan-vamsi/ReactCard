import React from "react";
import "./Card.css";

// Define a type for the props
interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  onProfile: () => void;
  onFollow: () => void;
}

// Use the defined type for the props parameter
export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  description,
  onProfile,
  onFollow
}) => (
  <div className="card">
    <img src={image} alt="Profile" />
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      <div className="buttons">
        <button onClick={onProfile}>LinkedIn</button>
        <button onClick={onFollow} className="primary">
          GitHub
        </button>
      </div>
    </div>
  </div>
);
