import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { modalConfigs } from "../../components/Modal/modalConfigs";

export default function StoreCards() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
            <div className="flex justify-between">
              <div className="font-medium tracking-normal text-gray-700 text-xl">
                Manage Store
              </div>
              <Button size="sm" className="h-10 gap-1" onClick={toggleModal}>
                <PlusCircle className="h-3.5 w-3.5 sm:hidden" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Store
                </span>
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-7">
          {/* Store 1 */}
          <div className="border rounded lg:w-5/6 h-[10rem] lg:h-[12rem] mb-6">
            <div className="flex lg:gap-4 h-full">
              <div className="branch-image bg-[#F0F1F3] w-[16rem] lg:w-[24rem] grid place-content-center">
                Singullure Branch
              </div>
              <div className="content-cotainer flex justify-between w-full p-4">
                <div className="content">
                  <div className="font-medium text-gray-500 text-lg">
                    Lisy Store
                  </div>
                  <div className="text-gray-500 mt-1 lg:mt-2">
                    1A/Krihnarajapuram, 3 rd street sulur
                  </div>
                  <div className="text-gray-500 mt-1 lg:mt-2">
                    Coimbatore - 6313403
                  </div>
                  <div className="text-gray-500 mt-1 lg:mt-2">044- 653578</div>
                </div>
                <div className="btn">
                  <Button className="bg-transparent hover:bg-transparent text-[#1366D9] border rounded-md hover:border-primary sm:px-6">
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Store 2 */}
          <div className="border rounded lg:w-5/6 h-[10rem] lg:h-[12rem]">
            <div className="flex lg:gap-4 h-full">
              <div className="branch-image bg-[#F0F1F3] w-[16rem] lg:w-[24rem] grid place-content-center">
                Singullure Branch
              </div>
              <div className="content-cotainer flex justify-between w-full p-4">
                <div className="content">
                  <div className="font-medium text-gray-500 text-lg">
                    Lisy Store
                  </div>
                  <div className="text-gray-500 mt-1 lg:mt-2">
                    1A/Krihnarajapuram, 3 rd street sulur
                  </div>
                  <div className="text-gray-500 mt-1 lg:mt-2">
                    Coimbatore - 6313403
                  </div>
                  <div className="text-gray-500 mt-1 lg:mt-2">044- 653578</div>
                </div>
                <div className="btn">
                  <Button className="bg-transparent hover:bg-transparent text-[#1366D9] border rounded-md hover:border-primary sm:px-6">
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Modal
        open={isModalOpen}
        onOpenChange={toggleModal}
        mode="create"
        config={modalConfigs["stores"]}
      />
    </>
  );
}
