import React from "react";

import MyLayout from "../components/myLayout"
import SEO from "../components/seo";
import heroImage from '../images/american-eagle/american-eagle-flying-mobile.webp'
// import dogIllustration from "../images/dog-illustration.svg";

function AboutPage() {


  return (


    <MyLayout>

      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />


      <section className="">

        <div className="bg-blue-200">

          <img
            className="object-cover"
            src={heroImage}
            alt="american-eagle"

          />

        </div>

        <div className="mt-8 ">

          <h1 className="font-roboto text-2xl text-center " >ABOUT EAGLE JET INTERNATIONAL</h1>

          <div className="py-8 px-8 font-roboto font-light text-md leading-loose">

            <p>Our First Officer programs commenced in 1996 and have given low time pilots with no airline experience from many areas
            (European Union, United States, Asia etc.) the unique opportunity to be provided with airline First Officer employment or
            experience during actual commercial flight operations. This is not simulator or flight school aviation flight time but rather
            the experience that can only be gained in actual flight situations on line with airlines as a First Officer. </p>

            <br />
            <p>Our unique airline
            First Officer programs take place during actual airline commercial operations as no simulator training or flight school general
            aviation training can replace actual airline experience. This unique experience meets and exceeds the hiring requirements of
            most airlines worldwide when it does not already include direct employment with our partner airlines in Europe, United States or Asia.</p>

          </div>

          <div className="bg-gray-200 py-8 px-8 font-roboto font-light text-md leading-loose">

            <p>
              Our <span> heavy jet programs</span> primarily take place on the A320 and B737 NG, are for low time pilots, are based in the European area
              and in Asia and take place with our partner airlines. They include direct employment, type rating + employment or experience/line
              training.
          </p>

          </div>

          <div className=" py-8 px-8 font-roboto font-light text-md leading-loose">

            <p>
              Our USA based multi crew certified executive jet and heavy turboprop programs are for low time US citizens
              and green card holders with an FAA license and take place with our partner FAA Part 135 air carriers. They 
              include type rating + First Officer employment. American FAA Part 121 regional airlines give priority for hiring
              to pilots who are already experienced and familiar with the airline operational environment on multi crew certified turbine
              powered aircraft before investing a substantial financial amount in their regional jet training.
          </p>

          </div>

          <div className="bg-gray-200 py-8 px-8 font-roboto font-light text-md leading-loose">

            <p>
            Our multi crew certified regional jet and heavy turboprop First Officer programs for low time FAA pilots from any country ubased close 
            to the USA give pilots the opportunity to gain airline multi crew certified First Officer experience including operations to and from
            large international airports. Any pilot holding an FAA license has access to these programs. Should a pilot not hold the FAA license, a 
            short license conversion course is required and can be completed in any FAA Part 141 flight school of your choice or with any of our 
            FAA partner flight schools. 
            </p>

            <p>
            This airline multi crew First Officer experience has been greatly appreciated by the many airlines worldwide 
            which have been hiring our pilots during or upon completion of their program since 1996. For the past 9 years, many cadets have been sent 
            to Eagle Jet International by their foreign major airline to attend our multi crew certified airline First Officer programs immediately upon 
            obtaining their commercial pilot license with instrument and multiengine ratings.
          </p>

          </div>

        </div>

      </section>

      {/* <section className="flex flex-col items-center md:flex-row">

        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
            The point is... to live one&apos;s life in the full complexity of
            what one is, which is something much darker, more contradictory,
            more of a maelstrom of impulses and passions, of cruelty, ecstacy,
            and madness, than is apparent to the civilized being who glides on
            the surface and fits smoothly into the world.
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Thomas Nagel
          </cite>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={dogIllustration} />
        </figure>

      </section> */}

    </MyLayout>

  );

}

export default AboutPage;
