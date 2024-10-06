import { HighlightCard } from "./HighlightCard";
import { ProjectCardDetails } from "./ProjectCardDetails";

export const SolidProjectCard = () => {
  return (
    <a href="https://github.com/uerkw/solid-uploader">
      <HighlightCard>
        <ProjectCardDetails
          title="SolidJS Uploader"
          text="Bringing fine-grained reactivity to your S3 buckets. Manage and upload files from a convenient web app to any compatible storage provider"
        />
      </HighlightCard>
    </a>
  );
};

export const HuffmanProjectCard = () => {
  return (
    <a href="https://github.com/uerkw/huffman-CPP">
      <HighlightCard>
        <ProjectCardDetails
          title="Huffman Encoder"
          text="Implementation of Huffman encoding and compression. Works best with ASCII text for demonstration purposes"
        />
      </HighlightCard>
    </a>
  );
};

export const LSystemsProjectCard = () => {
  return (
    <a href="https://github.com/uerkw/javaLindenmeyer">
      <HighlightCard>
        <ProjectCardDetails
          title="L-Systems"
          text="Create drawings that mimic plant growth behavior! An implementation of Lindenmeyer parallel rewriting systems using JavaFX and turtle graphics drawing"
        />
      </HighlightCard>
    </a>
  );
};

export const PortfolioProjectCard = () => {
  return (
    <a href="https://github.com/uerkw/uerk.dev">
      <HighlightCard>
        <ProjectCardDetails
          title="Portfolio Page"
          text="The page you're reading now! Made with 💖 using React, Remix, and Tailwind. All hosted for free on CloudFlare Pages! "
        />
      </HighlightCard>
    </a>
  );
};

export const UerkAutosProjectCard = () => {
  return (
    <a href="https://github.com/uerkw/astro.uerk.autos">
      <HighlightCard>
        <ProjectCardDetails
          title="Uerk.Autos"
          text="A website for my dad's project car. Built with Astro and Tailwind."
        />
      </HighlightCard>
    </a>
  );
};

export const SopsTfProjectCard = () => {
  return (
    <a href="https://github.com/uerkw/sops-tf-minimal">
      <HighlightCard>
        <ProjectCardDetails
          title="Using SOPS with Terraform"
          text="An example of using SOPS to encrypt and decrypt secrets in Terraform"
        />
      </HighlightCard>
    </a>
  );
};
