export class DeliveryInfo {
    public constructor(
  
      public order_id: number,
      public user_name?: string,
      public del_id?:number,
      public DelId?: string,
      public track_id?: number,
      public status?: string,
      public delivery_id_fk?: number,
      public product_id?: number,
      public product_name?: string,
      public UserName?: string,
      public order_date?: string,
      public date?: string,
      public order_amount?: number,
      public payment_type?: string,
      public order_spc_instruction?: string,
      public order_id_fk?: number,
      public product_id_fk?: number,
      public product_price?: number,
      public od_id?: number,
      public order_qty?: number,
      public delivery_id?: number,
    ) {
  
    }
  }