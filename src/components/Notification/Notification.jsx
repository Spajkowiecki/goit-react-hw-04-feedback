export default function Notification({ children }) {
  return <p>{children}</p>;
}

// Notification.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// };
