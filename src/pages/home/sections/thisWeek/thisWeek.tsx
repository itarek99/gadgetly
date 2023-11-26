import Container from '../../../../components/container';
import WeekProducts from './components/weekProducts';
import WeeklyOffer from './components/weeklyOffer';

function ThisWeek() {
  return (
    <Container>
      <div className="flex justify-between items-end mb-4">
        <h2 className="font-semibold text-2xl ">This Week</h2>
        <div className="flex justify-center gap-4">
          <button className="font-medium text-sm">Best Seller</button>
          <button className="font-medium text-sm">New Arrivals</button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <WeeklyOffer />
        </div>
        <div className="col-span-8">
          <WeekProducts />
        </div>
      </div>
    </Container>
  );
}
export default ThisWeek;
