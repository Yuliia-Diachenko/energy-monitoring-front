import css from "./Lines.module.css";
// import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import dataGreen from "../../data/data.json";

export default function Lines() {
    return (
        <section  className={css.dataChart}>
            <Bar data={{
                labels: dataGreen.map((data) => data.Year),
                datasets: [{
                    label: "GeneratedElectricityAmount",
                    data: dataGreen.map((data) => data.GeneratedElectricityAmount),
                    backgroundColor: [
                        "rgba(60, 179, 113, 0.8)",
                    ],
                    borderColor: "rgba(255, 165, 0, 0.8)",
                }],
            }} />
        </section>
    )
}