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
                  className={`group relative ${
                    service.full_size ? "col-span-4" : "col-span-2"
                  } flex pt-32 justify-start items-end p-4 pb-6 rounded-xl hover:scale-[.95] border-2 border-transparent hover:border-2 hover:border-white transform transition`}
                >
                  <span className="text-white drop-shadow z-10 ">
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
          name: "Coaching d'éducation privés",
          link: "https://random.dog/",
          image_url:
            "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        },
        {
          name: "Conseils personnalisés",
          link: "https://random.dog/",
          image_url:
            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
          name: "Accompagnement face à la peur des chiens",
          link: "https://random.dog/",
          image_url:
            "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
        },
        {
          name: "Aide lors d’une nouvelle arrivée",
          link: "https://random.dog/",
          image_url:
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        },
      ],
    }, // will be passed to the page component as props
  };
}

export default Services;
