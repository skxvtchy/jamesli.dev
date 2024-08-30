import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";

export default function NextLinks() {
  return (
    <div className="mb-32 grid gap-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left pt-20">
      <a
        href="https://github.com/skxvtchy"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gradient-to-b hover:from-[#f5f5f5] hover:to-gray-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold flex items-center justify-center">
          Github <FaGithub className="mx-2" />
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 text-center">
          You gotta checkout out the profile!
        </p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gradient-to-b hover:from-[#f5f5f5] hover:to-gray-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold flex items-center justify-center">
          Resume
          <FaAlignLeft className="mx-2 text-xl" />
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 text-center">
          Highlights or my depressing career
        </p>
      </a>

      <a
        href="https://www.linkedin.com/in/jamesli784/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gradient-to-b hover:from-[#f5f5f5] hover:to-gray-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="mb-3 text-2xl font-semibold flex items-center justify-center">
          Linkedin <FaLinkedin className="mx-2" />
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 text-center">
          Stalk me I'm even more boring here
        </p>
      </a>
    </div>
  );
}
