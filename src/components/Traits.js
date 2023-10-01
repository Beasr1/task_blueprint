const Traits = () => {
  return (
    <div>
      <div className=" text-[14px] mb-4 flex gap-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        Traits
      </div>

      <div className=" text-[12px] flex-col justify-center items-center relative p-4 gap-x-4">
        <div>Background</div>
        <div>Clothes</div>
        <div>Earring</div>
        <div>Eyes</div>
        <div>Fur</div>
        <div>Hat</div>
        <div>Mouth</div>
      </div>
    </div>
  );
};
export default Traits;
