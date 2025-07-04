import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const result = calculateInvestmentResults(input);
  const initInvest =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  console.log(result);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((entry) => {
          const totalInterest =
            entry.valueEndOfYear -
            entry.annualInvestment * entry.year -
            initInvest;

          const totalAmm = entry.valueEndOfYear - totalInterest;

          return (
            <tr key={entry.year}>
              <td>{entry.year}</td>
              <td>{formatter.format(entry.valueEndOfYear)}</td>
              <td>{formatter.format(entry.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmm)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
