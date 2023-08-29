import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string }
}
export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  return  (<div>
    <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent 
    text-5xl drop-shadow font-extrabold">
    {page && page.title}
    </h1>
  <div className=" prose lg:prose-xl text-gray-700 mt-10 font-serif text-[#242424;] font-[400] text-[25px] leading-[32px] tracking-[-0.003em]">
    <PortableText value={page && page.content} />
    </div>
</div>)
  
}