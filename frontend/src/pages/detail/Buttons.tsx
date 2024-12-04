import { useMutation } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePlace } from "../../api";
import { toast } from "react-toastify";

const Buttons = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { isPending, mutate } = useMutation({
    mutationKey: ["deletePlace"],
    mutationFn: () => deletePlace(id as string),

    onSuccess: () => {
      toast.success("Hotel akıştan kaldırıldı");
      navigate("/");
    },
    onError: () => {
      toast.error("Üzgünüz bir hata oluştu!");
    },

  });

  return (
    <div className="flex justify-between ">
      <Link to={".."} className="btn">
        <MdKeyboardArrowLeft />
        Geri
      </Link>

      <button disabled={isPending} onClick={() => mutate()} className="btn">
        <FaRegTrashAlt />
        Sil
      </button>
    </div>
  );
};

export default Buttons;
