import { ChangeEvent, useState } from "react";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

export default function Index() {
  const [getStoreVal, setStoreVal] = useState<
    { id: number; task: string; isDone: boolean; isEdit: boolean }[]
  >([]);
  const [getInputVal, setInputVal] = useState<string>("");

  console.log(getStoreVal, "#getStoreVal");

  return (
    <div className=" w-full h-screen  flex  flex-col  items-center  justify-start bg-slate-100 ">
      <div className=" w-[400px] h-auto p-[15px] shadow-lg bg-[#ffffff] mt-[35px] rounded-[8px] ">
        <div className=" w-full h-[40px] flex flex-row items-center justify-between ">
          <div className=" w-full h-[38px]  bg-blue-300/30 rounded-[8px] mr-[15px] ">
            <input
              value={getInputVal}
              placeholder="Task..."
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputVal(e.target.value)
              }
              className=" bg-transparent w-full h-full p-[10px] placeholder:text-black/30 rounded-[8px] outline-blue-600/70 text-slate-800/80 text-[15px] font-medium"
            />
          </div>
          <button
            disabled={getInputVal?.length ? false : true}
            onClick={() => {
              if (getInputVal) {
                setStoreVal([
                  ...getStoreVal,
                  {
                    id: getStoreVal?.length,
                    task: getInputVal,
                    isDone: false,
                    isEdit: false,
                  },
                ]);
              }

              setInputVal("");
            }}
            className={` min-w-[110px]  h-full ${
              getInputVal?.length
                ? "bg-blue-500  cursor-pointer "
                : "bg-gray-500/70  cursor-not-allowed"
            }  flex flex-row items-center justify-center rounded-[8px]`}
          >
            Create
          </button>
        </div>
        <div className=" w-full h-auto ">
          {getStoreVal.map((value: any, index: number) => (
            <div
              key={index}
              className=" w-full h-[40px] px-[12px] pl-[10px] bg-blue-600/10 mt-[10px] flex flex-row items-center justify-between rounded-[5px] text-[14px] text-black"
            >
              <div className=" flex flex-row items-center justify-start">
                <div
                  onClick={() => {
                    setStoreVal(
                      getStoreVal?.map((childValue: any) =>
                        childValue?.id === value?.id
                          ? { ...childValue, isDone: !childValue?.isDone }
                          : childValue
                      )
                    );
                  }}
                  className=" mr-[12px] cursor-pointer"
                >
                  {value?.isDone ? (
                    <MdOutlineCheckBox size={25} className=" text-black/70 " />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank
                      size={25}
                      className=" text-black/70 "
                    />
                  )}
                </div>
                {value?.isEdit ? (
                  <input
                    value={value.task}
                    className={` w-full h-full p-[6px]  rounded outline-none select-none `}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setStoreVal(
                        getStoreVal?.map((childValue: any) =>
                          childValue?.id === value?.id
                            ? { ...childValue, task: e.target.value }
                            : childValue
                        )
                      );
                    }}
                  />
                ) : (
                  <div
                    className={` ${
                      value?.isDone ? "line-through text-gray-600/50" : ""
                    }  select-none `}
                  >
                    {value.task}
                  </div>
                )}
              </div>
              <div className=" flex flex-row items-center justify-between">
                <div
                  onClick={() => {
                    setStoreVal(
                      getStoreVal?.map((childValue: any) =>
                        childValue?.id === value?.id
                          ? { ...childValue, isEdit: !childValue?.isEdit }
                          : childValue
                      )
                    );
                  }}
                  className=" cursor-pointer mr-[5px] hover:bg-slate-300/70 p-[3px] rounded-[6px]"
                >
                  <CiEdit
                    size={25}
                    className=" text-blue-700 hover:text-blue-600"
                  />
                </div>
                <div
                  onClick={() => {
                    setStoreVal(
                      getStoreVal?.filter(
                        (childValue: any) => childValue?.id !== value?.id
                      )
                    );
                  }}
                  className=" cursor-pointer  hover:bg-slate-300/70 p-[5px] rounded-[6px]"
                >
                  <FaRegTrashCan
                    size={19}
                    className=" text-red-700 hover:text-red-600 "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
