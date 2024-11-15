import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
// const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];
const LINKS = [ "© All rights reserved. 2024"];
export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        {/* <div className="relative min-h-screen w-full bg-[url('/image/event.jpg')] bg-cover bg-no-repeat">

        </div> */}
        <div 
        className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 "
        style={{
          background: "url('./image/john.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
        >
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"
          >
            Buy now and get 30% OFF!
          </Typography>
          <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base"
          >
            Don&apos;t miss out on this exclusive offer that will end soon.
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <a style={{ margin:0, padding: 0}} href="https://studio.oztix.com.au/events"
              target="_blank">
              <Button color="white" size="md">
                Buy tickets Now
              </Button>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            variant="h6"
            className="text-gray-900"
          >
            Halla Events
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <a href="https://www.facebook.com/HallaEventsAu" target="_blank">
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-facebook text-lg" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/hallaeventsau" target="_blank">
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
            </a>
            <a href="https://www.youtube.com/@hallaevents6273" target="_blank">
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-youtube text-lg" />
              </IconButton>
            </a>
          </div>
        </div>
        {/* <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            Material Tailwind
          </a>{" "}
          by{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Creative Tim
          </a>
          .
        </Typography> */}
      </div>
    </footer>
  );
}



export default Footer;
