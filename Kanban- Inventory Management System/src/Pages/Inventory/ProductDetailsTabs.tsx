import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { History, ScanEye, Settings2, ShoppingBag } from "lucide-react";

import { ProductsType } from "@/routes/inventory.index";

type ProductDetailsProps = {
  product: ProductsType;
};

export default function ProductDetailsTabs({ product }: ProductDetailsProps) {
  return (
    <>
      <Tabs defaultValue="overview" className="w-full">
        {/* tab list */}
        <TabsList className="grid w-full xl:w-[60%] grid-cols-4">
          <TabsTrigger value="overview" className="gap-2">
            <ScanEye className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Overview
            </span>
          </TabsTrigger>
          <TabsTrigger value="purchases" className="gap-2">
            <ShoppingBag className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Purchases
            </span>
          </TabsTrigger>
          <TabsTrigger value="adjustments" className="gap-2">
            <Settings2 className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Adjustments
            </span>
          </TabsTrigger>
          <TabsTrigger value="history" className="gap-2">
            <History className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              History
            </span>
          </TabsTrigger>
        </TabsList>

        {/* tab body */}
        {/* overview */}
        <TabsContent value="overview">
          <div className="lg:min-h-max flex-col lg:flex lg:flex-row lg:relative">
            {/* Card 2 */}
            <Card className="border-none shadow-none lg:w-[40%] pt-5 lg:sticky lg:top-0 lg:h-max lg:order-2">
              <CardContent className="p-3 sm:p-6 space-y-2">
                <div className="flex items-center justify-center">
                  <img
                    src={product?.image}
                    alt=""
                    style={{ height: "250px" }}
                  />
                </div>
                <Table>
                  <TableBody>
                    <TableRow className="border-none hover:bg-transparent">
                      <TableCell>Opening Stock</TableCell>
                      <TableCell className="font-medium">40</TableCell>
                    </TableRow>
                    <TableRow className="border-none hover:bg-transparent">
                      <TableCell>Remaining Stock</TableCell>
                      <TableCell className="font-medium">34</TableCell>
                    </TableRow>
                    <TableRow className="border-none hover:bg-transparent">
                      <TableCell>On the Way</TableCell>
                      <TableCell className="font-medium">15</TableCell>
                    </TableRow>
                    <TableRow className="border-none hover:bg-transparent">
                      <TableCell>Threshold Value</TableCell>
                      <TableCell className="font-medium">12</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Card 1 */}
            <Card className="border-none shadow-none lg:w-[60%] lg:order-1">
              {/* primary details */}
              <CardHeader className="pb-1">
                <CardTitle className="font-medium tracking-normal text-gray-500 text-lg">
                  Primary Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 space-y-2">
                <Table>
                  <TableBody>
                    <TableRow className="border-none hover:bg-transparent capitalize">
                      <TableCell>Product Name</TableCell>
                      <TableCell className="font-medium">
                        {product?.title}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-none hover:bg-transparent">
                      <TableCell>Product Category</TableCell>
                      <TableCell className="font-medium capitalize">
                        {product?.category}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-none hover:bg-transparent">
                      <TableCell>Price</TableCell>
                      <TableCell className="font-medium">
                        $ {product?.price}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>

              {/* description */}
              <CardHeader className="pb-1">
                <CardTitle className="font-medium tracking-normal text-gray-500 text-lg">
                  Description
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 space-y-2">
                <Table>
                  <TableBody>
                    <TableRow className="border-none hover:bg-transparent">
                      <TableCell className="font-medium text-justify">
                        {product?.description}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>

              {/* supplier details */}
              <CardHeader className="pb-1">
                <CardTitle className="font-medium tracking-normal text-gray-500 text-lg">
                  Supplier Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 space-y-2">
                <Table>
                  <TableBody>
                    <TableRow className="border-none hover:bg-transparent">
                      <TableCell>Supplier Name</TableCell>
                      <TableCell className="font-medium">
                        Ronald Martin
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-none hover:bg-transparent">
                      <TableCell>Contact Number</TableCell>
                      <TableCell className="font-medium tracking-wide">
                        98975 58952
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>

              {/* stocks location */}
              <CardHeader className="pb-1">
                <CardTitle className="font-medium tracking-normal text-gray-500 text-lg">
                  Stocks Location
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 space-y-2">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead>Store Name</TableHead>
                      <TableHead>Stock in Hand</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Sulur Branch</TableCell>
                      <TableCell
                        className="font-medium"
                        style={{ color: "#1570ef" }}
                      >
                        15
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Singallur Branch</TableCell>
                      <TableCell
                        className="font-medium"
                        style={{ color: "#1570ef" }}
                      >
                        19
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* purchases */}
        <TabsContent value="purchases">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* adjustments */}
        <TabsContent value="adjustments">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* history */}
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
