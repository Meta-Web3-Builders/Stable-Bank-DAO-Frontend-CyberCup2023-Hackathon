import classnames from "classnames";
import { BounceLoader } from "react-spinners";

const LoadingBtn = ({ loading, loadingCopy, copy, ...rest }) => {
  const btnClasses = [
    "px-8",
    "rounded",
    "py-3",
    "bg-[#6059f7]",
    "text-white",
    "font-bold",
    "flex",
    "items-center",
    "justify-center",
  ];
  const btnClassnames = {
    "no-events": loading,
    "pointer-events": !loading,
  };

  return (
    <button
      disabled={loading}
      type={"submit"}
      className={classnames(btnClasses.join(" "), btnClassnames)}
      {...rest}
    >
      <BounceLoader color={"#eaf7ff"} loading={loading} size={20} />
      {loading && <div className="mr-2 md:mr-3" />}
      <span>{loading ? loadingCopy : copy}</span>
    </button>
  );
};

export { LoadingBtn as default };
