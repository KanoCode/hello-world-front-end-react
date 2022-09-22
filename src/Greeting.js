import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from './redux/greeting_reducer/greetings';

export default function Greeting() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  const demoData = useSelector((state) => state);
  // const demo = Selector(store => store)
  return (
    <div>
      <p>See the message below </p>
      <p>{demoData}</p>
    </div>
  );
}
