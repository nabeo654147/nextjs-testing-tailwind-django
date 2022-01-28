import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

type TitleProps = {
  title: string;
};

const Layout: React.FC<TitleProps> = ({ children, title = 'Nextjs' }) => {
  return (
    <div className="flex justify-center flex-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen text-white">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a
                  data-testid="blog-nav"
                  className="test-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Blog
                </a>
              </Link>
              <Link href={'/blog-page'}>
                <a
                  data-testid="admin-nav"
                  className="test-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                >
                  Adim
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-1 justify-center items-center flex-col w-screen my-12">
        {children}
      </main>

      <footer className="flex flex-col items-center mt-[-6px] text-[#fff] bg-[#262c3a]">
        <span className="hidden items-center mt-9 mb-8 text-[8px] font-semibold sm:flex">
          CREATED BY<p className="ml-3 text-lg font-bold">渡邉 智彦</p>
        </span>
        <Link href={'/'}>
          <a className="hover:opacity-75">
            <Image
              src="/vintage.jpg"
              alt="vintage"
              height={130}
              width={110}
            ></Image>
          </a>
        </Link>
        <div className=" grid grid-cols-2 gap-4 mt-8 mb-6">
          <a
            href="https://twitter.com/nabeo654147"
            className="hover:opacity-75"
          >
            <Image
              src="/twitter.png"
              alt="twitter"
              height={17}
              width={17}
            ></Image>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100052345449049"
            className="hover:opacity-75"
          >
            <Image
              src="/facebook.png"
              alt="facebook"
              height={17}
              width={17}
            ></Image>
          </a>
        </div>
        <span className="mb-5 text-xs">&copy; Corkboy</span>
      </footer>
    </div>
  );
};

export default Layout;
