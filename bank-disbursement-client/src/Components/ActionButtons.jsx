import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ActionButtons({ id }) {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <button type="submit" class="btn btn-primary" onClick={() => navigate(`/show/${id}`)}>Show</button>
      <button type="submit" class="btn btn-primary" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <button type="submit" class="btn btn-primary"
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
