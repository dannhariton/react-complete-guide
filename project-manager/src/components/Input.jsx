function Input({ type, label, ...props }, ref) {
  return (
    <>
      <label>{label}</label>
      <input
        ref={ref}
        type={type}
        {...props}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
    </>
  );
}

export default Input;
