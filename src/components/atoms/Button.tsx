interface Props {
  name: string;
  /**
   * free function
   */
  onClick?: () => void;
}

const Button = ({ name, onClick }: Props) => {
  return (
    <button
      type="submit"
      className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
