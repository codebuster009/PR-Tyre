import useCountUp from '../hooks/useCountUp.js';

// Renders an animated counter. Supports prefix/suffix and decimals.
export default function Counter({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1400,
  className = '',
}) {
  const { ref, value } = useCountUp(to, { duration, decimals });
  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();
  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
