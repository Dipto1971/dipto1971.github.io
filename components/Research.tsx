"use client";
import SectionWrapper from "./SectionWrapper";
import research from "@/data/research";
import Image from "next/image";
import Link from "next/link";

export default function Research() {
  return (
    <SectionWrapper>
      <div className="mt-12 mb-4">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Research
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-12">
        {research.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Image */}
              <div className="md:col-span-1 flex items-center justify-center">
                <div className="relative w-full aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {item.title}
                  </h2>
                  
                  {item.conference && (
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      {item.conference}
                      {item.paperNumber && ` • Paper #${item.paperNumber}`}
                    </p>
                  )}

                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    {item.description}
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {item.details}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {item.links.repository && (
                    <Link
                      href={item.links.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 text-sm font-medium rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-600 transition"
                    >
                      Repository
                    </Link>
                  )}
                  {item.links.paper && (
                    <Link
                      href={item.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 text-sm font-medium rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-600 transition"
                    >
                      Paper
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {index !== research.length - 1 && (
              <div className="border-b border-zinc-200 dark:border-zinc-700 mt-4" />
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
