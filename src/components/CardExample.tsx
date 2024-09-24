import { Card } from "./Card";
import image from "../assets/image.jpg";

export const CardExample = () => {
  const handleProfile = () => {
    // LinkedIn Account
    window.open(
      "https://www.linkedin.com/in/pavan-vamsi-full-stack-developer/",
      "_blank"
    );
  };

  const handleFollow = () => {
    // GitHub Account
    window.open("https://github.com/pavan-vamsi", "_blank");
  };

  return (
    <section className="page card-example-page">
      <Card
        image={image}
        title="Pavan Vamsi Vulavala"
        subtitle="Software Engineer"
        description="Full Stack Software Engineer | Java, React, AWS | Driving Efficiency, Security, and User-Centric Solutions"
        onProfile={handleProfile}
        onFollow={handleFollow}
      />
    </section>
  );
};
