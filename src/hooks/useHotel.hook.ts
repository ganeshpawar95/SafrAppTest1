import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import GlobalEx from "../utils/GlobalEx";
import { HotelDetailsAPI } from "../redux/slices/HotelSlice";

export default function useHotelHook() {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = GlobalEx.useForm({});

  const { loading, results } = useSelector((state) => state.hotelSlice);

  const onSubmitHotelDetails = useCallback(
    (data: any) => {
      dispatch(
        HotelDetailsAPI({
          hotel_name: data.hotel_name,
          location_name: data.location_name,
        })
      )
        .unwrap()
        .then((resp) => {
          console.log("response", resp);
        })
        .catch((e) => {
          console.log("eeeee", e);
          GlobalEx.Toast.show({
            type: "error",
            text1: "Hotel data not found",
          });
        });
    },
    [dispatch, reset]
  );

  return {
    dispatch,
    onSubmitHotelDetails,
    control,
    handleSubmit,
    errors,
    loading,
    results,
  };
}
