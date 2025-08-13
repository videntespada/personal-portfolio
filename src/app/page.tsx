'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { SiRoblox } from 'react-icons/si';

export default function Home() {
  const [buttonCD, setbuttonCD] = useState(false);
  const [discordIconTooltip, setDiscordIconTooltip] = useState('Discord');

  const discordButtonClick = () => {
    if (buttonCD) return;
    if (discordIconTooltip == 'Discord') {
      navigator.clipboard.writeText('senlova');
      setbuttonCD(true);
      setDiscordIconTooltip('Copied!');

      setTimeout(() => {
        setbuttonCD(false);
        setDiscordIconTooltip('Discord');
      }, 1000);
    }
  };

  return (
    <div className="bg-base-100">
      {/* NavBar */}
      <div className="bg-base-100 navbar sticky top-0 z-1 shadow-sm">
        {/* Name & Avatar */}
        <div className="flex-1n navbar-start">
          <a className="btn btn-ghost text-secondary text-2xl">
            <div className="avatar pr-1">
              <div className="w-10 rounded-xl">
                <Image
                  src="/profile_picture.jpeg"
                  width={1200}
                  height={1200}
                  alt="Profile Picture"
                  className=""
                />
              </div>
            </div>
            Viden
          </a>
        </div>
        {/* Menu List */}
        <ul className="menu menu-horizontal bg-base-base-100 rounded-box navbar-center">
          <li>
            <a className="text-base-content font-bold">FAQ</a>
          </li>
          <li>
            <a className="text-base-content font-bold">About Me</a>
          </li>
          <li>
            <a className="text-base-content font-bold">Public Games</a>
          </li>
          <li>
            <a className="text-base-content font-bold">Projects & Recordings</a>
          </li>
        </ul>
        {/* Socials */}
        <div className="navbar-end">
          {/* Discord Button */}
          <div className="">
            <div
              className="tooltip tooltip-bottom"
              data-tip={discordIconTooltip}
            >
              <button
                className="btn btn-square btn-ghost"
                onClick={discordButtonClick}
              >
                <FaDiscord className="fill-secondary h-7 w-7" />
              </button>
            </div>
          </div>
          {/* Roblox Button */}
          <div className="tooltip tooltip-bottom flex-none" data-tip="Profile">
            <button
              className="btn btn-square btn-ghost"
              onClick={() =>
                window.open(
                  'https://www.roblox.com/users/299257961/profile',
                  '_blank',
                )
              }
            >
              <SiRoblox className="fill-secondary mx-1 h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div
        className="hero mx-full bg-sway min-h-screen bg-auto bg-center"
        style={{ backgroundImage: "url('/roblox_background.jpeg')" }}
      >
        <div className="hero-overlay bg-opacity-60 backdrop-blur-sm" />
        <div className="hero-content text-neutral-content text-center">
          <div className="max-h-md">
            <div className="flex flex-row">
              <h1 className="flex-auto text-6xl font-bold text-shadow-lg">
                Welcome to my Page. 👋
              </h1>
            </div>
            <p className="py-6">
              I build games, web apps, and all kinds of cool interactive
              experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        {/* FAQ */}
        <div className="rounded-box mx-auto ml-3 max-w-3xl space-y-4 p-5">
          {/* FAQ Title */}
          <h1 className="text-primary-content text-5xl font-bold text-shadow-lg">
            FAQ
          </h1>

          {/* FAQ Item 1 */}
          <div className="collapse-arrow text-primary-content border-base-200 collapse mt-10 shadow-lg">
            <input type="radio" name="FAQ1" defaultChecked />
            <div className="collapse-title flex flex-row text-2xl font-bold">
              <div className="flex-1">What do you do, specifically?</div>
            </div>
            <div className="collapse-content">
              <div className="flow-root">
                <div className="mx-4 my-2">
                  Well, I&apos;m a developer that specializes in ROBLOX Game
                  Development. I work with Luau, Roblox-TypeScript, while also
                  being familiar with a few packages/workflows. (Flamework,
                  Vide, Fusion, Atom, Promises... etc.)
                </div>
                <div className="mx-4 my-4">
                  I&apos;m also starting to work outside of roblox for very
                  specific (and down to earth) projects. This portfolio website
                  is one of them.
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="collapse-arrow text-primary-content border-base-200 collapse mt-0 shadow-lg">
            <input type="radio" name="FAQ1" />
            <div className="collapse-title flex flex-row text-2xl font-bold">
              <div className="flex-1">
                How does the development process work?
              </div>
            </div>
            <div className="collapse-content">
              <div className="flow-root">
                <div className="mx-4 my-3">
                  Things will be justified on contact, but heres an overview of
                  how it usually goes, to save time.
                </div>
                <div className="mx-4 mt-1 flex flex-row items-center">
                  I start with a clear spec <FaArrowRight className="mx-1" />{' '}
                  create a demo of the feature/game{' '}
                  <FaArrowRight className="mx-1" /> then set deadlines and
                  continue development.
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="collapse-arrow text-primary-content border-base-200 collapse mt-0 shadow-lg">
            <input type="radio" name="FAQ1" />
            <div className="collapse-title flex flex-row text-2xl font-bold">
              <div className="flex-1">What technologies do you use?</div>
            </div>
            <div className="collapse-content">
              <div className="flow-root">
                <div className="mx-4 my-2">
                  I primarily work with <strong>Luau</strong> and{' '}
                  <strong>Roblox-TypeScript</strong>, leveraging frameworks like{' '}
                  <em>Flamework</em>, <em>Fusion</em>, and <em>Vide</em>, plus
                  modern web stacks (React, Tailwind) for external projects.
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="collapse-arrow text-primary-content border-base-200 collapse mt-0 shadow-lg">
            <input type="radio" name="FAQ1" />
            <div className="collapse-title flex flex-row text-2xl font-bold">
              <div className="flex-1">What’s your typical turnaround time?</div>
            </div>
            <div className="collapse-content">
              <div className="flow-root">
                <div className="mx-4 my-2">
                  Small tasks or feature updates often take{' '}
                  <strong>1–3 days</strong>. Larger builds can range from{' '}
                  <strong>2–4 weeks</strong>, depending on scope and feedback
                  cycles.
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Item 6 */}
          <div className="collapse-arrow text-primary-content border-base-200 collapse mt-0 shadow-lg">
            <input type="radio" name="FAQ1" />
            <div className="collapse-title flex flex-row text-2xl font-bold">
              <div className="flex-1">How do you handle pricing?</div>
            </div>
            <div className="collapse-content">
              <div className="flow-root">
                <div className="mx-4 my-2">
                  I work on either a <strong>flat-fee</strong> or{' '}
                  <strong>hourly</strong> basis, whichever you prefer. Every
                  quote includes a clear scope document to avoid surprises.
                </div>
                <div className="mx-4 my-2 font-bold">
                  I <u>always</u> require a down-payment. Amount is usually
                  discussed.
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Item 7 */}
          <div className="collapse-arrow text-primary-content border-base-200 collapse mt-0 mb-10 shadow-lg">
            <input type="radio" name="FAQ1" />
            <div className="collapse-title flex flex-row text-2xl font-bold">
              <div className="flex-1">How can I get in touch or hire you?</div>
            </div>
            <div className="collapse-content">
              <div className="flow-root">
                <div className="mx-4 my-2">
                  Reach me at{' '}
                  <a
                    href="mailto:kyleprycemail@gmail.com"
                    className="underline"
                  >
                    kyleprycemail@gmail.com
                  </a>{' '}
                  or click the Discord icon above to copy my handle. I’ll reply
                  within 48 hours to discuss your needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-sway {
          animation: bg-sway 18s ease-in-out infinite alternate;
          background-position-x: 0;
        }
        @keyframes bg-sway {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: -100px;
          }
        }
      `}</style>
    </div>
  );
}
