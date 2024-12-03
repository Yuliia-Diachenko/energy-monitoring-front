import css from './AnalyticsPage.module.css';
import Lines from '../../components/Lines/Lines';
import Chart from '../../components/Chart/Chart';
import Doughnuts from '../../components/Doughtnuts/Doughtnut';

export default function AnalysticsPage() {

    return (
        <main className={css.container}>
            <Chart />
            <Doughnuts />
            <Lines />         
        </main>
    )
}