import { useNavigate } from 'react-router-dom';

function ActionButtons({ id }) {
  //const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', gap: '6px' }}>
      <button onClick={() => navigate(`/show/${id}`)}>Show</button>
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <button
  onClick={async () => {
    if (confirm("Are you sure to delete?")) {
      await axios.delete(`http://localhost:8080/api/disbursement/deleteId/${id}`);
      window.location.reload(); // Or trigger a state change to refresh
    }
  }}
>
  Delete
</button>

    </div>
  );
}

export default ActionButtons;
