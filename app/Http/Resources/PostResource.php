<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' =>  $this->title,
            'post_text' => $this->post_text,
            'category_id' => $this->category_id,
            'created_at' => $this->created_at->toDateString()
        ];
    }
}
