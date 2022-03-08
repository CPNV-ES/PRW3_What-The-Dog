import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

type ServicesProps = {
  services: [ServiceProps];
};

type ServiceProps = {
  name: string;
  link: string;
  full_size?: boolean;
  image_url: string;
};

const Services: NextPage<ServicesProps> = (props: ServicesProps) => {
  const { services } = props;
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mx-4 p-2 sm:p-4 border-2 border-[#041f29] dark:border-none dark:bg-[#17333D] rounded-lg">
        <div className="flex flex-col sm:grid sm:grid-flow-row sm:grid-cols-4 gap-4">
          {services.map((service: ServiceProps, index) => {
            return (
              <Link key={index} href={service.link}>
                <a
                  className={`relative col-span-${
                    service.full_size ? 4 : 2
                  } flex pt-32 justify-start items-end p-4 pb-6 rounded-xl`}
                >
                  <span className="text-white drop-shadow z-10">
                    {service.name}
                  </span>
                  <div className="absolute inset-0">
                    <Image
                      alt={`Illustration pour le service ${service.name}`}
                      src={service.image_url}
                      objectFit="cover"
                      layout="fill"
                      className="rounded-xl"
                    />
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      services: [
        {
          name: "Coaching en comportement",
          link: "https://random.dog/",
          full_size: true,
          image_url:
            "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=oscar-sutton-yihlaRCCvd4-unsplash.jpg&w=1920",
        },
        {
          name: "Coaching en comportement",
          link: "https://random.dog/",
          image_url:
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        },
        {
          name: "Coaching en comportement",
          link: "https://random.dog/",
          image_url:
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        },
        {
          name: "Coaching en comportement",
          link: "https://random.dog/",
          image_url:
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        },
        {
          name: "Coaching en comportement",
          link: "https://random.dog/",
          image_url:
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        },
      ],
    }, // will be passed to the page component as props
  };
}

export default Services;
