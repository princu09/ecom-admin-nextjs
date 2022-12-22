const FormStep = ({ className, children, currentStep, prevStep, nextStep }) => {
  switch (currentStep) {
    case 0:
      return (
        <div className={className}>
          {children}
          <button
            className="border border-accentDarkColor bg-accentShadow hover:bg-accentDarkColor  hover:text-accentDarkBG p-3 rounded-md"
            onClick={() => nextStep()}
          >
            Next
          </button>
        </div>
      );

    case 1:
      return (
        <div className={className}>
          {children}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <button
              className="border border-accentDarkColor bg-accentShadow hover:bg-accentDarkColor  hover:text-accentDarkBG p-3 rounded-md"
              onClick={() => prevStep()}
            >
              Prev
            </button>
            <button
              className="border border-accentDarkColor bg-accentShadow hover:bg-accentDarkColor  hover:text-accentDarkBG p-3 rounded-md"
              onClick={() => nextStep()}
            >
              Next
            </button>
          </div>
        </div>
      );

    case 2:
      return (
        <div className={className}>
          {children}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <button
              className="border border-accentDarkColor bg-accentShadow hover:bg-accentDarkColor  hover:text-accentDarkBG p-3 rounded-md"
              onClick={() => prevStep()}
            >
              Prev
            </button>
            <button
              className="border border-accentDarkColor bg-accentShadow hover:bg-accentDarkColor  hover:text-accentDarkBG p-3 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      );

    default:
      break;
  }
};

export default FormStep;
