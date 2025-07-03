import Link from "next/link";
import Image from "next/image";

const Header = () => (
    <div className="bg-dark-gray box-border p-5 flex w-screen h-[150px] text-white/[0.81] items-center
                    max-[834px]:h-[100px] 
                    max-[393px]:p-2.5 max-[393px]:h-20">
        <div className="pl-10 m-0 flex items-center
                        max-[834px]:w-[35vw] max-[834px]:pl-[4vw]
                        max-[393px]:w-[50vw] max-[393px]:pl-[2vw]">
            <Link href="/">
                <Image 
                    src="/title_logo.svg" 
                    alt="uekann" 
                    width={420} 
                    height={110}
                    className="w-full align-middle"
                />
            </Link>
        </div>
        <div className="flex w-[200px] items-center justify-center ml-auto mt-auto mb-2.5 pr-10
                        max-[834px]:hidden">
            <Link href="https://www.instagram.com/uekan8" className="ml-0 mr-auto">
                <Image src="/sns/Instagram.svg" alt="Instagram" width={37} height={37} />
            </Link>
            <Link href="https://github.com/uekann" className="mx-auto">
                <Image src="/sns/GitHub.svg" alt="GitHub" width={37} height={37} />
            </Link>
            <Link href="https://zenn.dev/uekann" className="mr-0 ml-auto">
                <Image src="/sns/Zenn.svg" alt="Zenn" width={37} height={37} />
            </Link>
        </div>
    </div>
);

export default Header;
