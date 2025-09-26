interface UspContainerProps {
  title:
    | {
        first: string;
        second: string;
      }
    | ReactNode;
  description: string;
  lists: {
    label: string;
    text: string;
    cta?: { text: string; link: string };
  }[];
  listStyle?: "row" | "column";
}

interface FeeBenefitsProps {
  lists: {
    icon: string;
    title: string;
    description: string;
  }[];
}

type FAQItem = {
  faq_q: string;
  faq_a: string;
};

type EducationCardProps = {
  img: string;
  header: string;
  text: string;
  onClick?: () => void;
};
