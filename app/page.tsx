import Image from 'next/image';
import data from '../data.json';
import Link from 'next/link';

function LinkCard({url, title, image} : {
  url: string;
  title: string;
  image?: string
}){
  return(
    <Link href={url} target='_blank' className="flex items-center w-full
     p-1 rounded-lg shadow hover:scale-105 transition-all mb-3 bg-gray-100 max-w-3xl">

      <div className="flex text-center w-full">
       
       <div className="w-10 h-10">
        {image && (
              <Image 
              className='rounded-sm'
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
       </div>

        <h2 className=" flex justify-center items-center font-semibold w-full text-gray-700 -ml-10]">{title}</h2>
        {/* <p className="text-gray-500">{image}</p> */}
      </div>
    </Link>
  )
}

function GitHubIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="30"
      height="24"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          d="M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v19.636H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg 
      fill="#fff"
      width="30"
      height="24"
      version="1.1" id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"  
      viewBox="0 0 300 300" >
    <g id="XMLID_504_">
      <path id="XMLID_505_" d="M38.52,0.012h222.978C282.682,0.012,300,17.336,300,38.52v222.978c0,21.178-17.318,38.49-38.502,38.49
        H38.52c-21.184,0-38.52-17.313-38.52-38.49V38.52C0,17.336,17.336,0.012,38.52,0.012z M218.546,33.329
        c-7.438,0-13.505,6.091-13.505,13.525v32.314c0,7.437,6.067,13.514,13.505,13.514h33.903c7.426,0,13.506-6.077,13.506-13.514
        V46.854c0-7.434-6.08-13.525-13.506-13.525H218.546z M266.084,126.868h-26.396c2.503,8.175,3.86,16.796,3.86,25.759
        c0,49.882-41.766,90.34-93.266,90.34c-51.487,0-93.254-40.458-93.254-90.34c0-8.963,1.37-17.584,3.861-25.759H33.35v126.732
        c0,6.563,5.359,11.902,11.916,11.902h208.907c6.563,0,11.911-5.339,11.911-11.902V126.868z M150.283,90.978
        c-33.26,0-60.24,26.128-60.24,58.388c0,32.227,26.98,58.375,60.24,58.375c33.278,0,60.259-26.148,60.259-58.375
        C210.542,117.105,183.561,90.978,150.283,90.978z"/>
    </g>
    </svg>
  );
}


export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto px-8 w-full justify-center mt-16 mb-40">
      <Image 
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />

      <h1 className="font-bold mt-4 mb-8 text-xl">{data.name}</h1>
      {data.links.map((link) =>(
        <LinkCard key={link.url} {...link} />
      ))}
      <div className="flex items-center gap-4 mt-8 text-white">
        {data.socials.map((link) => {
          if(link.title.includes('Twitter (X)')){
            return <Link href={link.url} target='__blank'>< TwitterIcon /> </Link>
          }
          if(link.title.includes('Github')){
            return <Link href={link.url} target='__blank'>< GitHubIcon /> </Link>
          }
          if(link.title.includes('Instagram')){
            return <Link href={link.url} target='__blank'>< InstagramIcon /></Link>
          }
        })}
      </div>
     
    </div>
  )
}
