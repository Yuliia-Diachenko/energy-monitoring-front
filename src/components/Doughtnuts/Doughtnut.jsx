import css from "./Doughtnuts.module.css";
// import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

export default function Doughnuts() {
    return (
        <section className={css.dataChart}>
<Doughnut data={{
    labels: ["Biomass", "Biogas", "Solar", "Wind", "Hydro"],
    datasets: [{
        label: "Generated Electricity Amount Green Plants",
        data: [ 21.908, 79.186, 13.245, 8.235, 7.435],
        backgroundColor: [
            "rgba(60, 179, 113, 0.8)",
            "rgba(238, 130, 238, 0.8)",
            "rgba(255, 165, 0, 0.8)",
            "rgba(0, 0, 255, 0.8)",
            "rgba(106, 90, 205, 0.8)"
        ],
        borderRadius: 5,
    }],
}}/>
        </section>
    )
}