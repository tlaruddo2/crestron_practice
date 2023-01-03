import { useState, useLayoutEffect } from 'react';

const CrComLib = window.CrComLib;

export const useSubscribeDigital = joinNumber => {
  const [state, setState] = useState(false);

  useLayoutEffect(() => {
    const sub = CrComLib.subscribeState('boolean', joinNumber, setState);

    return () => {
      CrComLib.unsubscribeState('boolean', joinNumber, sub);
    };
  }, [joinNumber]);

  return state;
};

export const useSubscribeAnalog = joinNumber => {
  const [state, setState] = useState(0);

  useLayoutEffect(() => {
    const sub = CrComLib.subscribeState('number', joinNumber, setState);

    return () => {
      CrComLib.unsubscribeState('number', joinNumber, sub);
    };
  }, [joinNumber]);

  return state;
};

export const useSubscribeSerial = joinNumber => {
  const [state, setState] = useState('');

  useLayoutEffect(() => {
    const sub = CrComLib.subscribeState('string', joinNumber, setState);

    return () => {
      CrComLib.unsubscribeState('string', joinNumber, sub);
    };
  }, [joinNumber]);

  return state;
};

const publish = (type, joinNumber, value) =>
  CrComLib.publishEvent(type, joinNumber, value);

export const publishDigital = (joinNumber, value) =>
  publish('b', joinNumber, value);
export const publishAnalog = (joinNumber, value) =>
  publish('n', joinNumber, value);
export const publishSerial = (joinNumber, value) =>
  publish('s', joinNumber, value);
export const publishObject = (joinNumber, value) =>
  publish('o', joinNumber, value);

export const publishPress = joinNumber => {
  const TouchStart = () => publishDigital(joinNumber, true);
  const TouchStop = () => publishDigital(joinNumber, false);
  return [TouchStart, TouchStop];
};

export const publishToggle = joinNumber => {
  publishDigital(joinNumber, true);
  setTimeout(() => publishDigital(joinNumber, false), 250);
};

export const publishPressAndHold = joinNumber => {
  let interval;
  const TouchStart = () => {
    interval = setInterval(
      () => publishObject(joinNumber, { repeatdigital: true }),
      250
    );
  };
  const TouchStop = () => {
    clearInterval(interval);
    publishObject(joinNumber, { repeatdigital: false });
  };
  return [TouchStart, TouchStop];
};

export const useSubscribeBoolean = useSubscribeDigital;
export const useSubscribeNumber = useSubscribeAnalog;
export const useSubscribeString = useSubscribeSerial;
export const publishBoolean = publishDigital;
export const publishNumber = publishAnalog;
export const publishString = publishSerial;
