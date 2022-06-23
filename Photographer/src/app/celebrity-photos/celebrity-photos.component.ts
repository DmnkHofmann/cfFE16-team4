import { Component, OnInit } from '@angular/core';
import { IPhotos } from '../IPhotos';
import { photos } from '../photos';

@Component({
  selector: 'celebrity-photos',
  templateUrl: './celebrity-photos.component.html',
  styleUrls: ['./celebrity-photos.component.css']
})
export class CelebrityPhotosComponent implements OnInit 
{
  fotos:Array<IPhotos> = photos;
  topic_name:string = 'celebrities';
  fotos_name:string = '';

  constructor() { }

  getTopicName():string
  {
    return this.topic_name;
  }

  ngOnInit(): void {
  }

}
