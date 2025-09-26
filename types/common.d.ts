interface ArticleLang {
  id: string;
  title: string;
  description: string;
  image: string;
  contents: ArticleData[];
  publishedDate: string;
  type: string;
}

interface newsListDataTypes {
  [key: string]: ArticleLang[];
}

interface Glossaryitem {
  faq_q: string;
  faq_a: string;
}
interface glossaryList {
  [key: string]: Glossaryitem[];
}
interface NewsProps {
  title?: string;
  description?: string;
  classText?: string;
}

type languageType =
  | "en"
  | "cn"
  | "zh"
  | "vt"
  | "td"
  | "id"
  | "fr"
  | "ar"
  | "ru";

type languageDisplayNameType =
  | "Eng"
  | "Cn"
  | "Zh"
  | "Vt"
  | "Thai"
  | "Indo"
  | "French"
  | "Arab"
  | "Rus";

interface LanguageWrapperProps {
  children: ReactNode;
}

interface ProductIntroProps {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  btnText: string;
  btnLink: string;
  image: string;
  swapLayout?: "row" | "row-reverse";
}

interface StackProps {
  children: React.ReactNode;
  className?: string;
}

interface ProductsProps {
  title: string;
  description: string;
  listHeaders: {
    first: string;
    second: string;
  };
  list: (
    | string[]
    | {
        title: string;
        description: string;
      }[]
  )[][];
  disclaimer?: string;
}

interface ListCardProps {
  title: string;
  subTitle?: string;
  description: string | string[];
  icon: string;
  imgStyles?: {
    width: number;
    height: number;
  };
  className?: string;
  headerClassName?: string;
  btn?: {
    text: string;
    link: string;
    isPrimary?: boolean;
  };
  backgroundImage?: string;
}

interface ToUseStockbanxStepsProps {
  subTitle: string;
  title: string;
  description: string;
  steps: {
    title: string;
    description: string;
  }[];
  btnText: string;
  btnLink: string;
}

interface FaqItemProps {
  faq: {
    question: string;
    answer: string | React.ReactNode;
  };
  isActive: boolean;
  handleToggle: () => void;
}

interface StepsLadderProps {
  count: number;
  title: string;
  description: string;
  showLadder: boolean;
}

interface NumberCardProps extends ListCardProps {
  number: number;
  btn: {
    text: string;
    link: string;
  };
}

interface InfinitScrollerProps {
  children: React.ReactNode;
  config?: Options;
}
