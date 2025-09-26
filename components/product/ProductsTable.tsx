import { FC } from "react";

export const ProductsTable: FC<ProductsProps> = ({
  title,
  description,
  listHeaders,
  list,
  disclaimer,
}) => {
  return (
    <div className="mx-auto w-full max-w-[1000px]">
      <h2 className="text-3xl font-medium text-white">{title}</h2>
      <p className="text-[#D2D3DF] text-xl font-normal mb-10">{description}</p>

      <table className="min-w-full border-separate border-spacing-0 text-left border-primary">
        <thead>
          <tr className="bg-primary">
            <th className="px-4 py-4 rounded-tl-lg text-[12px] font-bold">
              {listHeaders.first}
            </th>
            <th className="w-4/5 px-4 py-4 rounded-tr-lg text-[12px] font-bold">
              {listHeaders.second}
            </th>
          </tr>
        </thead>
        <tbody className="product-table">
          {list.map((item) => {
            const [first, last] = item as [
              string[],
              {
                title: string;
                description: string;
              }[]
            ];

            return (
              <>
                {first.length === 1 && last.length >= 1 ? (
                  <tr className="bg-[#40444C] border-l border-b border-primary px-4 py-2 text-[12px] md:text-[14px] font-normal md:font-semibold">
                    <td className="bg-[#40444C] border-l border-b border-primary px-4 py-2 text-[12px] md:text-[14px] font-[500] md:font-[700]">
                      {first[0]}
                    </td>
                    <td className="w-4/5 bg-[#24272E] border-l border-r border-b border-primary px-4 py-2 text-[12px] md:text-[16px] font-normal">
                      {last.map((li) => (
                        <p>
                          {li.title && <strong>{li.title}:</strong>}{" "}
                          {li.description}
                        </p>
                      ))}
                    </td>
                  </tr>
                ) : null}
                {first.length > 1 ? (
                  <>
                    <tr className="bg-[#40444C] border-l border-b border-primary px-4 py-2 text-[12px] md:text-[14px] font-normal md:font-semibold">
                      <td className="bg-[#40444C] border-l border-b border-primary px-4 py-2 text-[12px] md:text-[14px] font-[500] md:font-[700]">
                        {first[0]}
                      </td>
                      <td
                        rowSpan={first.length}
                        className="w-4/5 bg-[#24272E] border-l border-r border-b border-primary px-4 py-2 text-[12px] md:text-[16px] font-normal"
                      >
                        {last.map((li) => (
                          <p>
                            {li.title && <strong>{li.title}:</strong>}{" "}
                            {li.description}
                          </p>
                        ))}
                      </td>
                    </tr>

                    {first.slice(1).map((li) => (
                      <tr className="bg-[#40444C] border-l border-b border-primary px-4 py-2 text-[12px] md:text-[14px] font-normal md:font-semibold">
                        <td
                          className="bg-[#40444C] border-l border-b border-primary px-4 py-2 text-[12px] md:text-[14px] font-[500] md:font-[700]"
                          style={{
                            borderBottom: "1px solid #00b144",
                          }}
                        >
                          {li}
                        </td>
                      </tr>
                    ))}
                  </>
                ) : null}
              </>
            );
          })}
        </tbody>
      </table>

      {disclaimer && (
        <p className="text-[#D2D3DF] text-sm font-normal mb-10">{disclaimer}</p>
      )}
    </div>
  );
};
