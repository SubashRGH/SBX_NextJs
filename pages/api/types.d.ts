type ResultDto<T> = {
  data: T;
  code: number;
  success: boolean;
  message: string;
  errorMessage: string;
};

type SymbolParams = {
  sec_name: string;
  lang_name: string;
  lic_name: string;
  country_code: string;
  action_name: string;
  page_name: string;
  meta_data: string;
  raw_url: string;
  business_id: string;
  parameter: string;
  startPage: number;
  pageNum: number;
  sort_type: string;
  sort_field: string;
  language: string;
  type: string;
  symbolType: string;
};

type allowedUnits = "px" | "inch" | "%";

interface ArticleData {
  type: "paragraph" | "bold" | "image" | "heading" | "div" | "link" | "span";
  childrens: (string | ArticleData)[];
  props?: {
    type?: string;
    src?: string;
    href?: string;
    styles?: {
      width?: `${number}${allowedUnits}` | "auto";
      height?: `${number}${allowedUnits}` | "auto";
      display?: "flex" | "block";
      flexDirection?: "column" | "row";
      gap?: `${number}${allowedUnits}`;
      italic?: boolean;
    };
  };
}

interface ArticleSnippetList {
  id: string;
  title: string;
  description: string;
  image: string;
}
